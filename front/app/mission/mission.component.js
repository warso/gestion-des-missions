import './mission.component.css';
import template from './mission.component.html'


class controller {
    constructor (MissionService) {
        this.MissionService = MissionService
        this.missions = []
    }
    
    $onInit (){
        console.log(this.MissionService.getMissions())
        this.MissionService.getMissions()
        .then(
        missions => {
            this.missions = missions
        })
        
    }
}

export let MissionComponent = {
    template,
    controller,
    bindings: {}
};