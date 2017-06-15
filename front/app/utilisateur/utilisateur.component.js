import './utilisateur.component.css';
import template from './utilisateur.component.html'


class controller {
    constructor (UtilisateurService) {
        this.UtilisateurService = UtilisateurService
        
    }
    
    $onInit() {
        this.UtilisateurService.getUtilisateurs()
            .then(utilisateurs => this.utilisateurs = utilisateurs)
    }

}

export let UtilisateurComponent = {
    template,
    controller,
    bindings: {utilisateurs:"<"}
};