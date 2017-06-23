
export class MissionService {
  constructor($http, $q, API_URL, moment, $location) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
    this.moment = moment
    this.$location = $location

  }

  updateMission(mission) {
    // paramètre mission récupére l'objet avec les donnée du formulaire de mission saisi(quand on clic sur le bouton modifier)

    // on fait une copie de notre mission afin de pouvoir faire la transformation des dates en string sans poser probléme à notre objet de base mission
    let missionCopy = angular.copy(mission)

    missionCopy.debut = this.moment(missionCopy.debut).format('YYYY/MM/DD')
    missionCopy.fin = this.moment(missionCopy.fin).format('YYYY/MM/DD')

    if (this.navbarNotifCallback) {
      this.navbarNotifCallback()
    }

    // on fait un put(permetttant le update en base de donée) en mettant missonCopy qui est l'objet que l'on veux appliquer
    return this.$http.put(API_URL + '/missions', missionCopy)
      .then(rep => rep.data)
  }

  getMissionsById(id) {
    if (!id) {
      return this.$q.resolve(this.mission = {
        debut: '',
        fin: '',
        nature: { id: '' },
        villeDepart: '',
        utilisateur: { matricule: '' },
        villeArrivee: '',
        transport: ''
      })
    }
    return this.$http.get(API_URL + '/missions/id/' + id)
      .then(
      rep => rep.data,
      err => { console.log('error acces API/missions for get mission', err) }
      )
  }

  getMissionById(id) {
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

  getMission() {
    return this.$http.get(API_URL + '/missions/')
      .then(
      rep => rep.data,
      err => { console.log('error acces API/missions for get mission', err) }
      )
  }

  getMissionEchue(matricule) {
    return this.$http.get(API_URL + '/missions/status/ECHUE/' + matricule)
      .then(
      rep => rep.data,
      err => { console.log('error acces API/missions for get mission', err) }
      )
  }

  getMissionNonEchue(matricule) {
    return this.$http.get(API_URL + '/missions/status/NOTECHUE/' + matricule)
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
    // envoie les data à mission.json
    this.$http.post(API_URL + '/missions', mission)

  }
}
