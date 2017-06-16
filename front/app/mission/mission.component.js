import './mission.component.css'
import template from './mission.component.html'

class controller {
<<<<<<< HEAD
  constructor (MissionService, LoginService) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []
  }

  $onInit () {
    let user = this.LoginService.loadUser()
    console.log('loaded user', user)
    if (user !== undefined) {
      this.MissionService.getMissions(user.matricule)
=======
    constructor (MissionService, LoginService) {
        this.MissionService = MissionService
        this.LoginService = LoginService
        this.missions = []
    }
    
    $onInit (){
        
        let user = this.LoginService.loadUser()
        if(user!=undefined) {
            this.MissionService.getMissions(user.matricule)
>>>>>>> origin/master
            .then(
            missions => {
              this.missions = missions
            })
    }
  }
}

export let MissionComponent = {
  template,
  controller,
  bindings: {}
}
