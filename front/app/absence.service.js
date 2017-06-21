export class AbsenceService {
    constructor($http, $q, API_URL) {
        this.$http = $http
        this.$q = $q
        this.API_URL = API_URL

        // this.api = "https://absences-api.cleverapps.io/absences/total"
        this.api = "http://localhost:3000/absences"
    }
    
    
    getAbsences() {
        return this.$http.get(this.api)
        .then(
        rep => {
            return rep.data
        },
        err => {
            console.log("Erreur connection API absences", err)
        }
        )
    }
}