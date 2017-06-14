export function route ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
    .when('/', {
        template: '<accueil></accueil>'
    })
    .when('/missions', {
        template: '<mission></mission>'
    })
    .when('/login',{
        template: "<login-component></login-component>"
    })
    
    .otherwise({
        redirectTo: '/'
    });
    
}
