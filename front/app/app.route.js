export function route($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<accueil></accueil>'
        })
        .when('/missionsVisualisation', {
            template: '<mission></mission>'
        })
        .when('/missionsCreation', {
            template: '<missionCreation></missionCreation>'
        })        
        .when('/login', {
            template: "<login-component></login-component>"
        })
        .when('/utilisateur', {
            template: "<utilisateur></utilisateur>"
        })
        .otherwise({
            redirectTo: '/'
        });

}
