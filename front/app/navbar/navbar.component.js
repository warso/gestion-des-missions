import './navbar.component.css'
import template from './navbar.component.html'

class controller {
<<<<<<< HEAD
  constructor (LoginService) {
    this.LoginService = LoginService
    this.user = {}
  }
=======
    constructor(LoginService) { 
        this.LoginService = LoginService
        this.LoginService.navbarCallback = function () {this.onUserChange()}.bind(this)
        this.user = {}
    }

    $onInit(){
        
        console.log("navbar user", this.user)
        this.user = this.LoginService.loadUser()
    }

    onUserChange() {
        this.user = this.LoginService.loadUser()
    }
>>>>>>> origin/master

  $onInit () {
    console.log('user', this.user)
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
