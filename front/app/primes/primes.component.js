import './primes.component.css'
import template from './primes.component.html'

class controller {
  constructor (MissionService, LoginService, $scope) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.$scope = $scope
    this.missions = []
    this.missionsInitiales = []

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          data: [40, 10, 60, 70, 20, 20]
        },
        {
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          data: [30, 70, 40, 90, 60, 70]
        }
      ]
    }
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
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
