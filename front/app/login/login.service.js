

export class LoginService {
    constructor($http, $q, API_URL) {
        this.$http = $http
        this.$q = $q
        this.API_URL = API_URL
    }
    
    recup() {
        console.log("dans la methode recup du service")
        // envoie les data à user.json
        return this.$http.get('http://localhost:3000/user')
        .then(
        /*succes*/
        rep => {
            rep.data
            console.log("reponse ok", rep.data)
            return rep.data
        },
        /*error*/
        err => {
            console.log("error", err)
        }
        
        )
        
    }
    
    getUserByEmail(email) {
        return this.$http.get(API_URL + "/utilisateurs/email/?email=" + email)
        .then(
        rep => {
            return rep.data
        },
        err => { 
            console.log("error", err)
        }
        )
    }
    
    verif(user) {
        console.log("dans la methode verif du service")
        // le return de ma fonction verif() est une promesse. J'en ai besoin pour pouvoir voir si j'ai un match ou pas de user entre la saisie et la base de donnée
        return this.recup().then((users) => {
            let resultat = undefined;
            users.forEach((elementUser) => {
                console.log("verification du foreach", users)
                if (user.email == elementUser.email && user.password == elementUser.password) {
                    console.log("user reconnu", elementUser.email)
                    resultat = elementUser;
                }
                
                else {
                    console.log("user inconnue")
                    
                }
                
            }, this);
            
            // ici j'ai le return de ma promesse qui me retourne donc un resultat ( qui contient ou pas un element de mon tableau de user)
            return resultat;
        })
        
        
    }
    
    ajoutNouveauEmploye(user) {
        console.log("recuperation de la fonction loginService", user)
        // envoie les data à user.json
        let $promesse = this.$http.post('http://localhost:3000/user', user)
    }
}