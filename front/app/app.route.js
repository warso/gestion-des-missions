export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        template: '<accueil></accueil>'
    })
    .when('/login',{
        template: "<login></login>"
    })
    .otherwise({
        redirectTo: '/'
    });

}
