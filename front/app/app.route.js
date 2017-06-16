export function route ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider
        .when('/', {
          template: '<accueil></accueil>'
        })
        .when('/missionsVisualisation', {
<<<<<<< HEAD
          template: '<mission></mission>'
        })
        .when('/missionsValidation', {
          template: '<mission-validation></mission-validation>'
        })
        .when('/missionsCreation', {
          template: '<missionCreation></missionCreation>'
        })
=======
            template: '<mission></mission>',
            requireAuth: true,
            authorizeRole: ["EMPLOYE", "ADMINISTRATEUR", "MANAGER"] 
        })
        .when('/missionsCreation', {
            template: '<missionCreation></missionCreation>',
            requireAuth: true,
            authorizeRole: ["EMPLOYE", "ADMINISTRATEUR", "MANAGER"] 
        })        
>>>>>>> origin/master
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
