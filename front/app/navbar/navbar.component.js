import './navbar.component.css'
import template from './navbar.component.html'

class controller {
  constructor (LoginService) {
    this.LoginService = LoginService
    this.LoginService.navbarCallback = function () { this.onUserChange() }.bind(this)
    this.user = {}
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
