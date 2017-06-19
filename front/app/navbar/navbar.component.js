import './navbar.component.css'
import template from './navbar.component.html'

class controller {
  constructor (LoginService, $scope, $location ) {
    this.LoginService = LoginService
    this.LoginService.navbarCallback = function () { this.onUserChange() }.bind(this)
    this.user = {}
    this.hide = true
    
    $scope.$on('$routeChangeStart', function(angularEvent, newUrl) {
      if($location.path() === "/login") {
        this.hide = true;
      }
      else {
        this.hide = false
      }
  }.bind(this));
}


$onInit(){
  this.user = this.LoginService.loadUser()
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
