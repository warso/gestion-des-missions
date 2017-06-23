import template from './missionCreation.component.html'

class controller {
  constructor(MissionService, LoginService, $location, moment) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.$location = $location
    this.mission = {
      debut: '',
      fin: '',
      nature: { id: '' },
      villeDepart: '',
      utilisateur: { matricule: '' },
      villeArrivee: '',
      transport: ''
    }
    this.moment = moment
    this.errorValid = false
    this.errorValid1 = false
    this.errorValid2 = false
  }

  addMission() {
    this.mission.utilisateur = this.LoginService.loadUser()
    if (!this.mission.utilisateur) {
      alert('alert1')
    } else if (this.moment(this.mission.debut) > this.moment(this.mission.fin)) 
    { this.errorValid = true }

    else if ((this.mission.transport === 'AVION') && (this.moment(this.mission.debut).format('YYYY/MM/DD') - this.moment(new Date()).format('YYYY/MM/DD') <= 7)) 
    { this.errorValid1 = true }
    
    else if (this.moment(this.mission.debut).format('YYYY/MM/DD') === this.moment(new Date()).format('YYYY/MM/DD')) 
    {this.errorValid2 = true} 
    
    else {
      let mission = angular.copy(this.mission)
      mission.utilisateur.matricule = this.LoginService.loadUser().matricule

      // modifier les dates pour correspondre au format spring
      mission.debut = this.moment(mission.debut).format('YYYY/MM/DD')
      mission.fin = this.moment(mission.fin).format('YYYY/MM/DD')

      // ajout d'une nouvelle mission
      this.MissionService.ajoutNouvelleMission(mission)
      this.$location.path('/missionsVisualisation').reload
    }
  }

  $onInit() {
    this.listNatureMission()
    this.tabTransportMission()
  }
  listNatureMission() {
    this.MissionService.getMissionNature()
      .then(natures => this.natures = natures)
  }

  tabTransportMission() {
    this.MissionService.getMissionTransport()
      .then(transports => this.transports = transports)
  }

  reset() {
    this.$location.path('/missionsVisualisation')
  }
}

export let MissionCreationComponent = {
  template,
  controller,
  bindings: { mission: '<' }
}
