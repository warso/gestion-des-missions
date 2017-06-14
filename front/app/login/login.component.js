
import template from './login.component.html'
class controller {
    // je crée mon objet loginService avec le this, dans lequelle j'injecte mon service LoginService(voir le index.js)
    constructor (LoginService) {
        this.loginService = LoginService

    }
//  Le component combine les controller et les view. Ici dans la classe controller on a nos methodes de controller
    employeRecup(user){
   this.loginService.loginServiceRecup(user)
    }

    employeAdd(user){
        this.loginService.ajoutNouveauEmploye(user)
    }
    
}

export let LoginComponent = {
    template,
    controller,
    bindings: {}
};