export function route($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider
    .when('/', {
      // template: '<accueil></accueil>'
      redirectTo: '/missionsVisualisation'
    })
    .when('/missionsVisualisation', {
      template: '<mission></mission>',
      requireAuth: true,
      authorizeRole: ['EMPLOYE', 'ADMINISTRATEUR', 'MANAGER']
    })
    .when('/frais/:id?', {
      template: '<mission></mission>',
      requireAuth: true,
      authorizeRole: ['EMPLOYE', 'ADMINISTRATEUR', 'MANAGER']
    })
    .when('/noteDeFrais', {
      template: '<note-de-frais></note-de-frais>',
      requireAuth: true,
      authorizeRole: ['EMPLOYE', 'ADMINISTRATEUR', 'MANAGER']
    })
    .when('/missionsPlanning', {
      template: '<mission-planning></mission-planning>',
      requireAuth: true,
      authorizeRole: ['EMPLOYE', 'ADMINISTRATEUR', 'MANAGER']
    })
    .when('/missionsModification/:id?', {
      template: '<mission-modification></mission-modification>'
    })
    .when('/missionsValidation', {
      template: '<mission-validation></mission-validation>',
      requireAuth: true,
      authorizeRole: ['MANAGER']
    })
    .when('/primes', {
      template: '<primes></primes>',
      requireAuth: true,
      authorizeRole: ['EMPLOYE', 'ADMINISTRATEUR', 'MANAGER']
    })
    .when('/missionsCreation', {
      template: '<mission-creation></mission-creation>',
      requireAuth: true,
      authorizeRole: ['EMPLOYE', 'ADMINISTRATEUR', 'MANAGER']
    })
    .when('/login', {
      template: '<login-component></login-component>'
    })
    .otherwise({
      redirectTo: '/'
    })
}
