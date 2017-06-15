
import template from './login.component.html'
// le component est mon intelligence entre les pages html et les services
class controller {
    // je crée mon objet loginService avec le this, dans lequelle j'injecte mon service LoginService(voir le index.js), j'injecte mon service angular $location
    constructor(LoginService, $location) {
        this.loginService = LoginService
        this.$location = $location
        this.user = {
            email: "",
            password: ""
        }
        
        this.sha1 = require('sha1');
        
    }
    //  Le component combine les controller et les view. Ici dans la classe controller on a nos methodes de controller
    verifUser() {
        console.log('verifUser =')
        //  ici j'ai une promesse qui a pour parametre u userRecup qui est le resultat de ma promesse se trouvant dans la fonction verif() dans login.service
        this.loginService.verif(this.user).then(userRecupere => {
            console.log('result =', userRecupere)
            if (userRecupere) {
                this.$location.path('http://localhost:9000/gestion-des-missions/')
            } else {
                
            }
            
        })
        
    }
    
    connection () {
        this.loginService.getUserByEmail(this.user.email)
        .then(
        user => {
            let dataUser = user[0]
            console.log("data user", dataUser)
            console.log("ctrl user", this.user)
            if(dataUser.email === this.user.email && dataUser.password === this.sha1(this.user.password))
                console.log("succes connection")
            else
                console.log("eror connection")
        }
        )
    }
    
    
    addUser() {
        this.loginService.ajoutNouveauEmploye(this.user)
    }
    
}

export let LoginComponent = {
    template,
    controller,
    bindings: {
        user: "<"
    }
};