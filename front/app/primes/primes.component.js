import './primes.component.css'
import template from './primes.component.html'

class controller {
  constructor (MissionService, LoginService, $scope) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.missions = []
    this.missionsAnnee = []
    this.annees = []
    this.$scope = $scope

    $scope.labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    $scope.series = ['Prime']
    $scope.data = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
  }

  $onInit () {
    this.annees = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissions(user.matricule)
            .then(
            missions => {
              this.missions = missions
            })
    }
  }

  changeAnnee () {
    // on met à jour l'array des missions de l'année à afficher
    this.missionsAnnee = this.missions.filter(
      function (mission) {
        return (mission.fin.split('/')[0] === this.selectAnnee) && (mission.statut === 'ECHUE')
      }.bind(this))

    // on met à jour le graph
    let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.missionsAnnee.forEach(function (mission) {
      res[mission.fin.split('/')[1] - 1] += mission.prime
    })
    this.$scope.data = [res]
  }
}

export let PrimesComponent = {
  template,
  controller,
  bindings: {}
}
