import './navbar.component.css';
import template from './navbar.component.html';

class controller {
    constructor(LoginService) { 
        this.LoginService = LoginService
        this.user = {}
    }

    $onInit(){

        console.log("user", this.user)
        this.user = this.LoginService.loadUser()
    }

}

export let NavBarComponent = {
    template,
    controller,
    bindings: {
        user: "<"
    }
};
