import template from './missionPlanning.component.html'

class controller {
  constructor (MissionService, LoginService, $scope) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []

    this.$scope = $scope
    this.$scope.calendarView = 'month';
    this.$scope.viewDate = new Date();
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

export let MissionPlanning = {
  template,
  controller,
  bindings: {}
}
