
export class MissionService {
  constructor($http, $q, API_URL, moment) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
    this.moment = moment

  }

  updateMission(mission) {
    //paramètre mission récupére l'objet avec les donnée du formulaire de mission saisi(quand on clic sur le bouton modifier)

    // on fait une copie de notre mission afin de pouvoir faire la transformation des dates en string sans poser probléme à notre objet de base mission
    let missionCopy = angular.copy(mission)

    missionCopy.debut = this.moment(missionCopy.debut).format('YYYY/MM/DD');
    missionCopy.fin = this.moment(missionCopy.fin).format('YYYY/MM/DD');

    // on fait un put(permetttant le update en base de donée) en mettant missonCopy qui est l'objet que l'on veux appliquer
    return this.$http.put(API_URL + '/missions', missionCopy)
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

  ajoutNouvelleMission(mission) {

    //console.log('recuperation de la fonction mision creationService', mission)
    // envoie les data à mission.json
    this.$http.post(API_URL + '/missions', mission);

  }
}
