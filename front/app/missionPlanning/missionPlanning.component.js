
import template from './missionPlanning.component.html'


class controller {
    constructor(MissionService, LoginService, $location, $scope) {
        this.MissionService = MissionService
        this.LoginService = LoginService
        this.$location=$location
        this.$scope = $scope
        
        this.today = new Date()
        this.y = this.today.getFullYear()
        this.m = this.today.getMonth()
        this.d = this.today.getDate()
        
        
        
        $scope.calendarView = 'month';
        $scope.viewDate = new Date()
        $scope.events = []
        
        
    }
    $onInit() {
        
        this.MissionService.getMissions(this.LoginService.loadUser().matricule)
        .then(
        rep => {
            this.missions = rep;
            console.log('planning missions',this.missions)
            
            for(let i in this.missions) {
                // console.log("mission ", this.missions[i])
                
                this.$scope.events.push( this.createEvent(this.missions[i]) )
            }
            
            
        },
        err => {
            console.log("Erreur de connection API ", err)
        }
        )
        
    }
    
    createEvent(mission) {
        return  {
            // The title of the event
            title: mission.nature.type + ' : ' + mission.villeArrivee, 
            // A javascript date object for when the event starts
            startsAt: new Date(mission.debut), 
            // Optional - a javascript date object for when the event ends
            endsAt: new Date(mission.fin), 
            // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
            color: this.getColor(mission.nature.type),
            //Allow an event to be dragged and dropped
            draggable: false, 
            //Allow an event to be resizable
            resizable: false, 
            //If set to false then will not count towards the badge total amount on the month and year view
            incrementsBadgeTotal: true, 
            //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
            cssClass: 'a-css-class-name', 
            // set to true to display the event as an all day event on the day view
            allDay: true 
        }
    }
    
    getColor(type) {
        let color = {
            primary:"",
            secondary:""
        }
        
        switch(type) {
            case 'Conseil':
                color.primary = '#0ab9e6'
                color.secondary = '#5acdeb'
                break
            case 'Formation':
                color.primary = '#e68a0a'
                color.secondary = '#e7b268'
                break
            case 'Expertise Technique':
                color.primary = '#391be9'
                color.secondary = '#705ce7'
                break
            
            default :
            // the primary event color (should be darker than secondary)
            color.primary = '#e3bc08'
            // the secondary event color (should be lighter than primary)
            color.secondary = '#fdf1ba' 
            
        }
        return color
    }
}


export let MissionPlanningComponent = {
    template,
    controller,
    bindings: { mission:"<"}
};
