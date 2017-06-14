
import template from './login.component.html'
class controller {
    constructor () {
        this.titre = 'Login';
    }
//  Le component combine les controller et les view. Ici dans la classe controller on a nos methodes de controller
    loginRecup(){
        console.log('recuperation ok')
    }
}

export let LoginComponent = {
    template,
    controller,
    bindings: {}
};