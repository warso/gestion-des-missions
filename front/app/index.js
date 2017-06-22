import angular from 'angular'
import ngCookies from 'angular-cookies'
import RouteModule from 'angular-route'
import $uibModal from 'angular-ui-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {moment} from 'moment'
import 'moment/locale/fr'

import { route } from './app.route'

import {AccueilComponent} from './accueil/accueil.component'
import {NavBarComponent} from './navbar/navbar.component'
import {LoginComponent} from './login/login.component'
import {MissionComponent} from './mission/mission.component'
import {PrimesComponent} from './primes/primes.component'
import {MissionValidationComponent} from './missionValidation/missionValidation.component'
import {MissionCreationComponent} from './missionCreation/missionCreation.component'
import { AuthComponent } from './auth/auth.component'
import {MissionModificationComponent} from './missionModification/missionModification.component'
import {MissionPlanningComponent} from './missionPlanning/missionPlanning.component'


import 'angular-chart.js'
import 'angular-bootstrap-calendar'
import 'angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css'


import { LoginService } from './login/login.service'
import { MissionService } from './mission.service'
import {AbsenceService} from './absence.service'

require('angular-moment')

angular.module('app', [RouteModule, ngCookies, $uibModal, 'angularMoment', 'mwl.calendar', 'chart.js'])
.value('API_URL', window.API_URL)
// .component('nom de la balise dans le app.route.js', Nom d'attache à notre component.)
// Ici on fait le liens entre notre liens et notre , controller, vue
.component('accueil', AccueilComponent)
.component('barnav', NavBarComponent)
.component('loginComponent', LoginComponent)
.component('mission', MissionComponent)
.component('primes', PrimesComponent)
.component('missionValidation', MissionValidationComponent)
.component('missionCreation', MissionCreationComponent)
.component('missionModification', MissionModificationComponent)

.component('missionPlanning', MissionPlanningComponent)

.component('auth', AuthComponent)

// ici 'LoginService' est le nom du service que je vais injecter dans mon controller (dans le component)
.service('LoginService', LoginService)
.service('MissionService', MissionService)
.service('AbsenceService', AbsenceService)

.config(route)

.config(['calendarConfig', function (calendarConfig) {
  // calendarConfig.templates.calendarMonthView = 'path/to/custom/template.html'
  calendarConfig.dateFormatter = 'moment'
  calendarConfig.allDateFormats.moment.date.hour = 'HH:mm'
  calendarConfig.allDateFormats.moment.title.day = 'ddd D MMM'
  calendarConfig.i18nStrings.weekNumber = 'Sem. {week}'
  calendarConfig.displayAllMonthEvents = true
  calendarConfig.showTimesOnWeekView = true
}])
