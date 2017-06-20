import './primes.component.css'
import template from './primes.component.html'

class controller {
  constructor (MissionService, LoginService) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []
    this.missionsSubalternes = []
    this.missionsInitiales = []
  }

  $onInit () {
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissionsSubalternes(user.matricule)
            .then(
            missions => {
              this.missions = missions
            })
    }

    this.missionsSubalternes = this.missions.filter(function (mission) {
      return this.LoginService.user.subalternes.contains(mission.utilisateur.matricule)
    })
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

export let PrimesComponent = {
  template,
  controller,
  bindings: {}
}
