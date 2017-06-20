import angular from 'angular'
import ngCookies from 'angular-cookies'
import RouteModule from 'angular-route'
import $uibModal from 'angular-ui-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {moment} from 'moment'

import { route } from './app.route'

import {AccueilComponent} from './accueil/accueil.component'
import {NavBarComponent} from './navbar/navbar.component'
import {LoginComponent} from './login/login.component'
import {MissionComponent} from './mission/mission.component'
import {PrimesComponent} from './primes/primes.component'
import {MissionValidationComponent} from './missionValidation/missionValidation.component'
import {MissionCreationComponent} from './missionCreation/missionCreation.component'
import {UtilisateurComponent} from './utilisateur/utilisateur.component'
import { AuthComponent } from './auth/auth.component'
import {MissionPlanningComponent} from './missionPlanning/missionPlanning.component'


import 'angular-bootstrap-calendar'
import 'angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css'


import { LoginService } from './login/login.service'
import { MissionService } from './mission.service'
import {UtilisateurService} from './utilisateur.service';
import {MissionCreationService} from './missionCreation.service';

require('angular-moment');

angular.module('app', [RouteModule, ngCookies, $uibModal, 'angularMoment', 'mwl.calendar'])
.value('API_URL', window.API_URL)
.component('accueil', AccueilComponent)
.component('barnav', NavBarComponent)
.component('loginComponent', LoginComponent)
.component('mission', MissionComponent)
.component('primes', PrimesComponent)
.component('missionValidation', MissionValidationComponent)
.component('missionCreation', MissionCreationComponent)
.component('utilisateur', UtilisateurComponent)
.component('missionPlanning', MissionPlanningComponent)

.component('auth', AuthComponent)

// ici 'LoginService' est le nom du service que je vais injecter dans mon controller (dans le component)
.service('LoginService', LoginService)
.service('MissionService', MissionService)
.service('UtilisateurService', UtilisateurService)
.service('MissionCreationService', MissionCreationService)

.config(route)
