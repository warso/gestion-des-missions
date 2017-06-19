
export class LoginService {
  constructor ($http, $q, API_URL, $cookies, $location) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
    this.$cookies = $cookies
    this.$location = $location
    this.cookieName = 'user'
    this.sha1 = require('sha1')

    let user = this.loadUser()
    if (user) {
      this.user = user
    }
  }

  recup () {
    console.log('dans la methode recup du service')
        // envoie les data à user.json
    return this.$http.get('http://localhost:3000/user')
        .then(
        /* succes */
        rep => {
          console.log('reponse ok', rep.data)
          return rep.data
        },
        /* error */
        err => {
          console.log('error', err)
        }

        )
  }

  getUserByEmail (email) {
    return this.$http.get(API_URL + '/utilisateurs/email/?email=' + email)
        .then(
        rep => {
          return rep.data
        },
        err => {
          console.log('Connection API impossible', err)
          return this.$q.reject(err)
        }
        )
  }

  verif (user) {
    console.log('dans la methode verif du service')
        // le return de ma fonction verif() est une promesse. J'en ai besoin pour pouvoir voir si j'ai un match ou pas de user entre la saisie et la base de donnée
    return this.recup().then((users) => {
      let resultat
      users.forEach((elementUser) => {
        console.log('verification du foreach', users)
        if (user.email === elementUser.email && user.password === elementUser.password) {
          console.log('user reconnu', elementUser.email)
          resultat = elementUser
        } else {
          console.log('user inconnue')
        }
      }, this)

            // ici j'ai le return de ma promesse qui me retourne donc un resultat ( qui contient ou pas un element de mon tableau de user)
      return resultat
    })
  }

  ajoutNouveauEmploye (user) {
    console.log('recuperation de la fonction loginService', user)
        // envoie les data à user.json
    this.$http.post('http://localhost:3000/user', user)
  }

  saveUser (user) {
    this.$cookies.putObject(this.cookieName, user)
    this.user = user

    if (this.navbarCallback) {
      this.navbarCallback()
    }
  }

  loadUser() {
    if (!this.user) {
      this.user = this.$cookies.getObject(this.cookieName)
    }
    return this.user
  }

  connection (user) {
    return this.getUserByEmail(user.email)
        .then(
        rep => {
          let dataUser = rep[0]
          if (!dataUser) {
            console.log('eror connection')
            return false
          }

          if (dataUser.email === user.email && dataUser.password === this.sha1(user.password)) {
            console.log('succes connection')
            this.saveUser(dataUser)
            if (this.navbarCallback) {
              this.navbarCallback()
            }
            return true
          } else {
            console.log('eror connection')
            return false
          }
        },
        err => {
          console.log('error connection API', err)
        }
        )
  }

  deleteUser () {
    this.user = undefined
    this.$cookies.remove(this.cookieName)

    this.$location.path('login')

    if (this.navbarCallback) {
      this.navbarCallback()
    }
  }
}
