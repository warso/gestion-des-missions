import angular from 'angular'
import ngCookies from 'angular-cookies'
import RouteModule from 'angular-route'
import $uibModal from 'angular-ui-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {moment} from 'moment'
import 'moment/locale/fr'

import { route } from './app.route'

import {NavBarComponent} from './uiComponent/navbar/navbar.component'
import {LoginComponent} from './uiComponent/login/login.component'
import {MissionComponent} from './missionComponents/mission/mission.component'
import {PrimesComponent} from './primes/primes.component'
import {MissionValidationComponent} from './missionComponents/missionValidation/missionValidation.component'
import {MissionCreationComponent} from './missionComponents/missionCreation/missionCreation.component'
import { AuthComponent } from './uiComponent/auth/auth.component'
import {MissionModificationComponent} from './missionComponents/missionModification/missionModification.component'
import {MissionPlanningComponent} from './missionComponents/missionPlanning/missionPlanning.component'
import {NoteDeFraisComponent} from './noteDeFrais/noteDeFrais.component'
import {SaisieNoteDeFraisComponent} from './saisieNoteDeFrais/saisieNoteDeFrais.component'
import {AjoutNoteDeFrais} from './ajoutNoteDeFrais/ajoutNoteDeFrais.component'
import 'angular-chart.js'
import 'angular-bootstrap-calendar'
import 'angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css'


import { LoginService } from './login.service'
import { MissionService } from './mission.service'
import {AbsenceService} from './absence.service'
import {NoteDeFraisService} from './noteDeFrais.service'


require('angular-moment')

angular.module('app', [RouteModule, ngCookies, $uibModal, 'angularMoment', 'mwl.calendar', 'chart.js'])
.value('API_URL', window.API_URL)
// .component('nom de la balise dans le app.route.js', Nom d'attache à notre component.)
// Ici on fait le liens entre notre liens et notre , controller, vue
.component('barnav', NavBarComponent)
.component('loginComponent', LoginComponent)
.component('mission', MissionComponent)
.component('primes', PrimesComponent)
.component('missionValidation', MissionValidationComponent)
.component('missionCreation', MissionCreationComponent)
.component('missionModification', MissionModificationComponent)
.component('noteDeFrais', NoteDeFraisComponent)
.component('ajoutNoteDeFrais', AjoutNoteDeFrais)
.component('saisieNoteDeFrais', SaisieNoteDeFraisComponent)

.component('missionPlanning', MissionPlanningComponent)

.component('auth', AuthComponent)

// ici 'LoginService' est le nom du service que je vais injecter dans mon controller (dans le component)
.service('LoginService', LoginService)
.service('MissionService', MissionService)
.service('AbsenceService', AbsenceService)
.service('NoteDeFraisService',NoteDeFraisService)

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
