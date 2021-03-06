
import template from './noteDeFrais.component.html'

class controller {
  constructor(MissionService, LoginService, $location) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.$location = $location
    this.missions = []
  }

  $onInit() {
    this.rechargerMissions()
  }

  rechargerMissions() {
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissionEchue(user.matricule)
        .then(
        missions => {
          this.missions = missions
          console.log("Missions apres rechargement", this.missions)
        })
    }
  }

  detailMission(id) {
    this.$location.hash(id)
    this.$location.path('/saisieNoteDeFrais')
  }
}

export let NoteDeFraisComponent = {
  template,
  controller,
  bindings: {
    missions: "<"
  }
}
