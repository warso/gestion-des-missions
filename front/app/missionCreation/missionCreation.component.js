
import template from './missionCreation.component.html'


class controller {
    constructor(MissionService, LoginService, $location, moment) {
        this.MissionService = MissionService
        this.LoginService = LoginService
        this.$location = $location
        this.mission = {
            debut: "",
            fin: "",
            nature: { id: "" },
            villeDepart: "",
            utilisateur: { matricule: "" },
            villeArrivee: "",
            transport: "",
        }
        this.moment = moment
    }



    addMission() {
        console.log(this.mission)
        this.mission.utilisateur = this.LoginService.loadUser()
        if (!this.mission.utilisateur) {
            console.log("Utilisateur non déf.")
            alert("alert1")

        }

        else if (this.moment(this.mission.debut) > this.moment(this.mission.fin)) 
        {alert("Debut avant fin")}

        else if (this.moment(this.mission.debut).day === new Date().day) 
        {alert("Debut aujourd'hui")}

        else if((this.mission.transport==="AVION") & (this.moment((this.mission.debut).day-new Date().day<=7)))
        {alert("Avion")}

        else {
            let mission = angular.copy(this.mission)
            mission.utilisateur.matricule = this.LoginService.loadUser().matricule

            // modifier les dates pour correspondre au format spring
            mission.debut = this.moment(mission.debut).format('YYYY/MM/DD');
            mission.fin = this.moment(mission.fin).format('YYYY/MM/DD');

            // ajout d'une nouvelle mission
            this.MissionService.ajoutNouvelleMission(mission)
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
    bindings: { mission: "<" }
};
