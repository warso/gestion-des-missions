import './navbar.component.css';
import template from './navbar.component.html';

class controller {
    constructor(LoginService) { 
        this.LoginService = LoginService
        this.user = {}
    }

    $onInit(){

        this.user = this.LoginService.loadUser()
        console.log("user", user)
    }

}

export let NavBarComponent = {
    template,
    controller,
    bindings: {
        user: "<"
    }
};