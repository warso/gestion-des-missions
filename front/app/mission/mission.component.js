import './mission.component.css'
import template from './mission.component.html'
import templateModal from './deletePopup.html'

class controller {
  constructor(MissionService, LoginService, $uibModal) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.$uibModal = $uibModal

    this.missions = []
  }

  $onInit() {
    this.rechargerMissions()
  }

  rechargerMissions() {
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissions(user.matricule)
        .then(
        missions => {
          this.missions = missions
          console.log("Missions apres rechargement", this.missions)
        })
    }
  }

  statutMission(){
   this.MissionService.getMissionStatus()
    console.log("fonctions statut mission")
  }



  popupDelete(mission) {
    // Ici je stoque mon this dans une variable, pour pouvoir l'utilisé dans une fonction anonyme qui a son propre this ( les fonctions anonyme ont leurs propres this)
    let me = this;

    me.$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: templateModal,
      controller: function ($scope, $uibModalInstance, MissionService) {
        // je suis dans une fonction anonyme et le this à partir de maintenant et jusqu'a ce qu'on sort de la focntion est celui de la fonction anonyme
        this.depart = "yo!"
        this.uneMission = mission;
        this.test = function () {
          console.log("test ok ")

        }
        this.annuler = () => {
          $uibModalInstance.close()
        }
        this.validerSuppression = () => {
          MissionService.deleteMission(this.uneMission.id)
          // ici j'utilise mon this stoquer dans la variable me, car je suis dans une fonction anonyme avec son this propre
            .then((rep) => me.rechargerMissions());
        }
      },
      controllerAs: '$ctrlPop',
    });
  }



}

export let MissionComponent = {
  template,
  controller,
  bindings: {
    mission:"<"
  }
}
