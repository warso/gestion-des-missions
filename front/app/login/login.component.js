
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

    this.errorLogin = false
  }
    //  Le component combine les controller et les view. Ici dans la classe controller on a nos methodes de controller
  verifUser () {
    console.log('verifUser =')
        //  ici j'ai une promesse qui a pour parametre u userRecup qui est le resultat de ma promesse se trouvant dans la fonction verif() dans login.service
    this.LoginService.verif(this.user).then(userRecupere => {
      console.log('result =', userRecupere)
      if (userRecupere) {
        this.$location.path('http://localhost:9000/gestion-des-missions/')
      } else {

      }
    })
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

  addUser () {
    this.LoginService.ajoutNouveauEmploye(this.user)
  }
}

export let LoginComponent = {
  template,
  controller,
  bindings: {
    user: '<'
  }
}
