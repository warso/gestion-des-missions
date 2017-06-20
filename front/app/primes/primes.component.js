import './primes.component.css'
import template from './primes.component.html'

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
}

export let PrimesComponent = {
  template,
  controller,
  bindings: {}
}
