
import template from './missionCreation.component.html'


class controller {
    constructor(MissionService, LoginService) {
        this.MissionService = MissionService
    }
}


export let MissionCreationComponent = {
    template,
    controller,
    bindings: {}
};