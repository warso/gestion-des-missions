
import template from './missionModification.component.html'

class controller {
    constructor(MissionService, LoginService, $location,$routeParams) {
        this.MissionService = MissionService
        this.LoginService = LoginService
        this.$location = $location
        // Recuperation de la mission en fonction de son Id et affichage de l'id dans l'uri

        MissionService.getMissionsById($routeParams.id)
            .then(mission => { 
        // Pour un problème d'affichage on a transformé la date en String avant de la stoquer en base de donnée.(dans missionCreation.js la fonction addMission(), utilisation librairie moment)
        // ici je fait le chemin inverse, je transforme uen chaîne de caractére en date, pour ne pas planté mon ng-model dans le .html(la où le type="date")
                mission.debut = new Date(mission.debut)
                 mission.fin = new Date(mission.fin)
                this.mission = mission
            })
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

    modifMission(mission) {
        console.log("modifmission")
         this.mission.utilisateur = this.LoginService.loadUser()
        
        this.MissionService.updateMission(this.mission)
       this.$location.path('/missionsVisualisation')
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