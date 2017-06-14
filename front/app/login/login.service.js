

export class LoginService {
    constructor($http, $q) {
        this.$http = $http
        this.$q = $q
    }

    loginServiceRecup(user) {
        console.log("recuperation de la fonction loginService", user)
        // envoie les data à user.json
        this.$http.get('http://localhost:3000/user')
            .then(
            /*succes*/
            rep => {
                if (rep.email)
                    console.log("test", rep.data[0].email)
                console.log("msg", rep)
            },
            /*error*/
            err => {
                console.log("error", err)
            }
            )
    }

    // function(msg){
    //             if(msg.user == 'succes') console.log('authentification reussite')
    //             else console.log('error login')
    // }

    ajoutNouveauEmploye(user) {
        console.log("recuperation de la fonction loginService", user)
        // envoie les data à user.json
        let $promesse = this.$http.post('http://localhost:3000/user', user)
    }
}