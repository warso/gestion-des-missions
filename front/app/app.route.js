export function route ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider
        .when('/', {
          template: '<accueil></accueil>'
        })
        .when('/missionsVisualisation', {
            template: '<mission></mission>',
            requireAuth: true,
            authorizeRole: ["EMPLOYE", "ADMINISTRATEUR", "MANAGER"] 
        })
        .when('/missionsValidation', {
            template: '<mission-validation></mission-validation>',
            requireAuth: true,
            authorizeRole: ["MANAGER"] 
        })
        .when('/missionsCreation', {
            template: '<missionCreation></missionCreation>',
            requireAuth: true,
            authorizeRole: ["EMPLOYE", "ADMINISTRATEUR", "MANAGER"] 
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
