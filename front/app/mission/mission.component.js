import './mission.component.css'
import template from './mission.component.html'
import templateModal from './deletePopup.html'

class controller {
  constructor (MissionService, LoginService,$uibModal) {
    this.MissionService = MissionService
    this.LoginService = LoginService
    this.$uibModal = $uibModal
    this.missions = []
  }

  $onInit () {
    let user = this.LoginService.loadUser()
    if (user !== undefined) {
      this.MissionService.getMissions(user.matricule)
            .then(
            missions => {
              this.missions = missions
            })
    }
  }

   DeleteButPopup(mission){
      
      
        this.$uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template: templateModal,
            controller: function() {
                 this.depart = "yo!"
                 this.uneMission = mission;
            },
            controllerAs: '$ctrl',
    });
}

closePopup() {
  console.log("close popup")
    $uibModalInstance.close($ctrl.selected.item);
  };

  cancel(){
    console.log("cancel popup")
    $uibModalInstance.dismiss('cancel');
  };
  
}

export let MissionComponent = {
  template,
  controller,
  bindings: {}
}
