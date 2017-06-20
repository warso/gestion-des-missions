
import template from './missionCreation.component.html'


class controller {
    constructor(MissionService, LoginService,MissionCreationService,$location, moment) {
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
        this.moment = moment
    }

    addMission() {
        this.mission.utilisateur=this.LoginService.loadUser()
        if (!this.mission.utilisateur){
            console.log("Utilisateur non déf.")
        }
        else {
            let mission = angular.copy(this.mission)
            mission.utilisateur.matricule=this.LoginService.loadUser().matricule

            // moficier les dates pour correspondre au format spring
            console.log(mission)
            mission.debut = this.moment(mission.debut).format('YYYY/MM/DD');
            mission.fin = this.moment(mission.fin).format('YYYY/MM/DD');
            console.log(mission)

            // this.mission.debut = this.mission.debut.substring(0,9)
            // this.mission.fin = this.mission.fin.substring(0,9)
            // console.log(this.mission)

            this.MissionCreationService.ajoutNouvelleMission(mission)
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
