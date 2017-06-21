
import template from './missionModification.component.html'

class controller {
    constructor(MissionService, LoginService, $location,$routeParams) {
        this.MissionService = MissionService
        this.LoginService = LoginService
        this.$location = $location
        // afin de recupéré l'id de la mission en fonction de son chemi uri
        MissionService.getMissionsById($routeParams.id)
            .then(mission => this.mission = mission)
    }


    $onInit() {
        this.listNatureMission()
        this.tabTransportMission()
    }
    
    listNatureMission() {
        this.MissionService.getMissionNature()
            .then(natures => this.natures = natures)
            .then(n => { console.log(this.natures) })
    }


    tabTransportMission() {
        this.MissionService.getMissionTransport()
            .then(transports => this.transports = transports)
            .then(t => { console.log(this.transports) })

    }

    modifMission() {
        console.log("modifmission")
        // this.mission.utilisateur = this.LoginService.loadUser()
        
        this.MissionService.updateMission(this.mission)

//this.MissionService.updateMission()
       // this.$location.path('/missionsVisualisation')
    }

    reset() {
        this.$location.path('/missionsVisualisation')
    }
}

export let MissionModificationComponent = {
    template,
    controller,
    bindings: { mission: "<" }
};