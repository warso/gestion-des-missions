export function route ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider
        .when('/', {
          template: '<accueil></accueil>'
        })
        .when('/missionsVisualisation', {
          template: '<mission></mission>'
        })
        .when('/missionsValidation', {
          template: '<mission-validation></mission-validation>'
        })
        .when('/missionsCreation', {
          template: '<missionCreation></missionCreation>'
        })
        .when('/login', {
          template: '<login-component></login-component>'
        })
        .when('/utilisateur', {
          template: '<utilisateur></utilisateur>'
        })
        .otherwise({
          redirectTo: '/'
        })
}
