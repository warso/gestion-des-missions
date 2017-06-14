export class UtilisateurService {
    constructor($http) {
        this.$http = $http
    }
    getUtilisateurs() {
        return this.$http.get("http://localhost:3000/user")
            .then(response => response.data)
    }
}