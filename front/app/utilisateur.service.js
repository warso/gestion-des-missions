export class UtilisateurService {
    constructor($http, API_URL) {
        this.$http = $http
        this.API_URL=API_URL
    }
    getUtilisateurs() {
        return this.$http.get(API_URL + "/utilisateur")
            .then(response => response.data)
    }
}