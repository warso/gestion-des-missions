import './missionValidation.component.css'
import template from './missionValidation.component.html'

class controller {
  constructor (MissionService, LoginService) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []
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
}

export let MissionValidationComponent = {
  template,
  controller,
  bindings: {}
}
