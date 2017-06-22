import './primes.component.css'
import template from './primes.component.html'

class controller {
  constructor (MissionService, LoginService, $scope) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []
    this.annees = []
    this.yearToDisplay = '2000'

    $scope.labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    $scope.series = ['Prime']
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40]
    ]
  }

  $onInit () {
    this.annees = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    this.yearToDisplay = '2000'
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissions(user.matricule)
            .then(
            missions => {
              this.missions = missions
            })
    }
  }

  getMissionsAnnee () {
    function isAnnee (mission) {
      return mission.fin.split('/')[0] === this.yearToDisplay
    }
    return this.missions.filter(isAnnee.bind(this))
  }
}

export let PrimesComponent = {
  template,
  controller,
  bindings: {}
}
