export class AbsenceService {
    constructor($http, $q, API_URL) {
        this.$http = $http
        this.$q = $q
        this.API_URL = API_URL
        
        // this.api = "https://absences-api.cleveraqsdfqsdfpps.io" 
        this.api = "https://absences-api.cleverapps.io" 
        this.apiAbs = this.api + "/absences/total"
        this.apiJF = this.api + "/jourFerie"
        // this.api = "http://localhost:3000/absences"
    }
    
    
    getAbsences() {
        return this.$http.get(this.apiAbs)
        .then(
        rep => {
            return rep.data
        },
        err => {
            console.log("Erreur connection API absences", err)
        }
        )
    }
    
    getAbsencesByMatricule(matricule) {
        return this.getAbsences()
        .then(
        abss => {
            let result = []
            if(abss)
            abss.forEach( elm => {
                if(matricule === elm.utilisateur.matriculeCollab){
                    result.push(elm)
                }
            })
            return result
        },
        err => {
            console.log("Erreur connection API absences", err)
        }
        )
    }
    
    getJoursFeries() {
        return this.$http.get(this.apiJF)
        .then(
        JF => {
            return JF.data
        },
        err => {
            console.log("Erreur connection API JourFerie", err)
        }
        )
        
    }
}