

export class MissionService {
    constructor($http, $q, API_URL) {
        this.$http = $http
        this.$q = $q
        this.API_URL = API_URL
        
        
    }

    test() {
        this.$http.get(API_URL+'/missions')
        .then(
            rep => {
                console.log("data", rep.data)
            },
            err => {console.log("error acces API/missions", err)}
        )
    }
}