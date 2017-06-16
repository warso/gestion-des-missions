
import template from './auth.component.html'


class controller {
    constructor(LoginService, $location, $scope) {
        console.log("constructor")
        this.LoginService = LoginService
        this.$location = $location
        
        $scope.$on('$routeChangeStart', function(angularEvent, newUrl) {
            let user = LoginService.loadUser()
            console.log("auth user",user)
            if (newUrl.requireAuth){
                
                if(user == undefined || !newUrl.authorizeRole.includes(user.role)){
                    console.log('nope!')
                    $location.path("login");
                }
            }
            else {
                
                console.log('free')
            }
            
        });
    }
    
}

export let AuthComponent = {
    template,
    controller,
    bindings: {
    }
};