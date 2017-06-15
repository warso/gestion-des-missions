
import template from './mission.component.html'


class controller {
    constructor (MissionService) {
        this.MissionService = MissionService
        
    }
    
    $onInit (){
        console.log("mission compo on init")
        this.MissionService.test()
        
    }
}

export let MissionComponent = {
    template,
    controller,
    bindings: {}
};