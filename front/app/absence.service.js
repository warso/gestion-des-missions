export class AbsenceService {
  constructor ($http, $q, API_URL) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL

    this.api = 'https://absences-api.cleverapps.io'
    this.apiAbs = this.api + '/absences/total'
    this.apiJF = this.api + '/jourFerie'
  }

  getAbsences () {
    return this.$http.get(this.apiAbs)
        .then(
        rep => {
          return rep.data
        }
        )
  }

  getAbsencesByMatricule (matricule) {
    return this.getAbsences()
        .then(
        abss => {
          let result = []
          if (abss) {
            abss.forEach(elm => {
              if (matricule === elm.utilisateur.matriculeCollab) {
                result.push(elm)
              }
            })
          }
          return result
        }
        )
  }

  getJoursFeries () {
    return this.$http.get(this.apiJF)
        .then(
        JF => {
          return JF.data
        }
        )
  }
}
