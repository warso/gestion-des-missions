
export class MissionService {
  constructor ($http, $q, API_URL) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
  }

  getMissions (matricule) {
    // console.log('getMissions()')
    return this.$http.get(API_URL + '/missions/matricule/' + matricule)
        .then(
        rep => rep.data,
        err => { console.log('error acces API/missions', err) }
        )
  }
}
