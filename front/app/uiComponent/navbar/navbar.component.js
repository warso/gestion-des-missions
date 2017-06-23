import './navbar.component.css'
import template from './navbar.component.html'

class controller {
  constructor (MissionService, LoginService, $scope, $location) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.LoginService.navbarCallback = function () {
      this.onUserChange()
    }.bind(this)
    this.MissionService.navbarNotifCallback = function () {
      this.majMissions()
    }.bind(this)
    this.user = {}
    this.hide = true
    this.$location = $location
    this.missions = []

    $scope.isActive = function (viewLocation) {
      return viewLocation === this.$location.path()
    }.bind(this)

    $scope.$on('$routeChangeStart', function (angularEvent, newUrl) {
      if ($location.path() === '/login') {
        this.hide = true
      } else {
        this.hide = false
      }
    }.bind(this))
  }

  $onInit () {
    this.user = this.LoginService.loadUser()
    this.majMissions()
  }

  majMissions () {
    if (this.user !== undefined) {
      this.MissionService.getMissionsSubalternes(this.user.matricule)
        .then(
          missions => {
            this.missions = missions
          })
    }
  }
  getMissionsEnAttente () {
    return this.missions.filter(function (mission) {
      return mission.statut === 'EN_ATTENTE_VALIDATION'
    })
  }

  onUserChange () {
    this.user = this.LoginService.loadUser()
  }
}

export let NavBarComponent = {
  template,
  controller,
  bindings: {
    user: '<'
  }
}
