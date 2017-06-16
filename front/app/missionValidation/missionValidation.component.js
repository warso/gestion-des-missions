import './missionValidation.component.css'
import template from './missionValidation.component.html'

class controller {
  constructor (MissionService, LoginService) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []
    this.missionsInitiales = []
  }

  $onInit () {
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissions(user.matricule)
            .then(
            missions => {
              this.missions = missions
            })
    }
  }

  validerMission (mission) {
    mission.statut = 'VALIDEE'
    this.MissionService.updateMission(mission)
  }

  RejeterMission (mission) {
    mission.statut = 'REJETEE'
    this.MissionService.updateMission(mission)
  }
}

export let MissionValidationComponent = {
  template,
  controller,
  bindings: {}
}
