import template from './login.component.html'


// le component est mon intelligence entre les pages html et les services
class controller {
    // je crée mon objet LoginService avec le this, dans lequelle j'injecte mon service LoginService(voir le index.js), j'injecte mon service angular $location
    
    constructor (LoginService, $location) {
        this.LoginService = LoginService
        this.$location = $location
        this.user = {
            email: '',
            password: ''
        }
        
        this.errorLogin = false
        this.debug = false
    }
    
    $onInit() {
        if(this.$location.search()["debug"] === "true") {
            console.log("coucou")
            this.debug = true
        }
    }
    
    connection () {
        this.LoginService.connection(this.user)
        .then(
        rep => {
            if (rep == true) {
                console.log('ok')
                
                this.errorLogin = false
                this.$location.path('missionsVisualisation')
            } else {
                this.errorLogin = true
                console.log("Vos informations d'authentification sont invalides")
            }
        }
        )
    }
}

export let LoginComponent = {
    template,
    controller,
    bindings: {
        user: '<'
    }
}
