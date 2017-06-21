
export class MissionService {
  constructor($http, $q, API_URL) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL


  }

  updateMission(id) {
    console.log('updateMissions()')
    return this.$http.put(API_URL + '/missions/' + id)
      .then(rep => rep.data)
  }

  getMissionsById(id) {
    console.log("recuperation de la mission par son id")
    if (!id) {
      return this.$q.resolve(this.mission = {
        debut: "",
        fin: "",
        nature: { id: "" },
        villeDepart: "",
        utilisateur: { matricule: "" },
        villeArrivee: "",
        transport: "",
      })
    }
    return this.$http.get(API_URL + '/missions/id/' + id)
      .then(
        rep => rep.data,
        err => { console.log('error acces API/missions for get mission', err) }
      )
  }



  getMissions(matricule) {
    return this.$http.get(API_URL + '/missions/matricule/' + matricule)
      .then(
      rep => rep.data,
      err => { console.log('error acces API/missions for get mission', err) }
      )
  }

  getMissionsSubalternes(matricule) {
    return this.$http.get(API_URL + '/missions/subalternes/' + matricule)
      .then(
      rep => rep.data,
      err => { console.log('error acces API/missions for get missionSubalternes', err) }
      )
  }

  deleteMission(id) {
    console.log('deleteMissions()')
    return this.$http.delete(API_URL + '/missions/' + id)
      .then(
      rep => rep.data,
      err => { console.log('error acces API/missions for delete mission', err) }
      )
  }

  // recupertion nature des missions (enumeration dans Java)
  getMissionNature() {
    return this.$http.get(API_URL + '/nature')
      .then(response => response.data)
  }
  // recupertion status des missions (enumeration dans Java)
  getMissionStatus() {
    return this.$http.get(API_URL + '/statut')
      .then(response => response.data)
  }

  getMissionTransport() {
    return this.$http.get(API_URL + '/transport')
      .then(response => response.data)
  }
}
