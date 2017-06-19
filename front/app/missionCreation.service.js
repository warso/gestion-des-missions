
export class MissionCreationService {
  constructor ($http, $q, API_URL, $location) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
    this.$location = $location
  }

  $onInit () {
  }

  ajoutNouvelleMission (mission) {
    console.log('recuperation de la fonction mision creationService', mission)
    // envoie les data à mission.json
    this.$http.post(API_URL + '/missions', mission)
  }
}
