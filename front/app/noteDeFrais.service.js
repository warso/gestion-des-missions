

export class NoteDeFraisService {
  constructor($http, $q, API_URL, moment,$location ) {
    this.$http = $http
    this.$q = $q
    this.API_URL = API_URL
    this.moment = moment
    this.$location = $location
    
  }

  getNoteDeFraisNature(){
    return this.$http.get(API_URL + '/noteDefrais/natures')
    .then(response => response.data)
  }
  
}