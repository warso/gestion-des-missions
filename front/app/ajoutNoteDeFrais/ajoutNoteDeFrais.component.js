import template from './ajoutNoteDeFrais.component.html'

class controller {
  constructor (MissionService, LoginService, NoteDeFraisService, $uibModal, $location) {
    this.MissionService = MissionService
    this.NoteDeFraisService = NoteDeFraisService
    this.LoginService = LoginService
    this.$uibModal = $uibModal
    this.$location = $location
    this.missions = []
  }

  $onInit () {
    this.NoteDeFraisService.getNoteDeFraisNature()
  //   return this.$http.get(API_URL + '/noteDefrais/natures')
    .then(data => {
      this.natures = data
      console.log(this.natures)
    })
  }
}

// le bindings est propre à angular
export let AjoutNoteDeFrais = {
  template,
  controller,
  bindings: {
  }
}
