
import template from './missionCreation.component.html'


class controller {
    constructor(MissionService, LoginService,MissionCreationService,$location) {
        this.MissionService = MissionService
        this.LoginService = LoginService
        this.$location=$location
        this.MissionCreationService=MissionCreationService
        this.mission = {
            debut:"",
            fin:"",
            nature:{id:""},
            villeDepart:"",
            utilisateur:{matricule:""},
            villeArrivee:"",
            transport:"",
        }
    }

    addMission() {
        this.mission.utilisateur=this.LoginService.loadUser()
        if (!this.mission.utilisateur){
            console.log("Utilisateur non déf.")
        }
        else {
            this.mission.utilisateur.matricule=this.LoginService.loadUser().matricule
            console.log(this.mission)
            this.MissionCreationService.ajoutNouvelleMission(this.mission)
            this.$location.path('/missionsVisualisation')
        }
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

    reset() {
        this.$location.path('/missionsVisualisation')
    }
}


export let MissionCreationComponent = {
    template,
    controller,
    bindings: { mission:"<"}
};
