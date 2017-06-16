
import template from './auth.component.html'


class controller {
    constructor(LoginService, $location, $scope) {
        this.LoginService = LoginService
        this.$location = $location
        
        $scope.$on('$routeChangeStart', function(angularEvent, newUrl) {
            let user = LoginService.loadUser()
            if (newUrl.requireAuth){
                if(user == undefined || !newUrl.authorizeRole.includes(user.role)){
                    $location.path("login");
                }
            }            
        });
    }
    
}

export let AuthComponent = {
  template,
  controller,
  bindings: {
  }
}
