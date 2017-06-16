
export class MissionService {
  constructor ($http, $q, API_URL) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
  }

export class MissionService {
    constructor($http, $q, API_URL) {
        this.$http = $http
        this.$q = $q
        this.API_URL = API_URL
        
        
    }
    
    getMissions(matricule) {
        return this.$http.get(API_URL+'/missions/matricule/'+matricule)
        .then(
        rep => rep.data,
        err => { console.log("error acces API/missions for get mission", err) }
        )
    }

    deleteMission(id) {
        console.log("deleteMissions()")
        return this.$http.delete(API_URL+'/missions/'+ id)
        .then(
        rep => rep.data,
        err => { console.log("error acces API/missions for delete mission", err) }
        )
    }

    // 
    getMissionNature() {
        return this.$http.get(API_URL + "/nature")
            .then(response => response.data)
    }

    getMissionTransport() {
        return this.$http.get(API_URL + "/transport")
            .then(response => response.data)
    }


}
