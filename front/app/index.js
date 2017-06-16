import angular from 'angular'
import ngCookies from 'angular-cookies'
import RouteModule from 'angular-route'

import 'bootstrap/dist/css/bootstrap.css'

import { route } from './app.route'

import {AccueilComponent} from './accueil/accueil.component'
import {NavBarComponent} from './navbar/navbar.component'
import {LoginComponent} from './login/login.component'
import {MissionComponent} from './mission/mission.component'
import {MissionValidationComponent} from './missionValidation/missionValidation.component'
import {MissionCreationComponent} from './missionCreation/missionCreation.component'
import {UtilisateurComponent} from './utilisateur/utilisateur.component'
<<<<<<< HEAD
import {LoginService} from './login/login.service'
import {MissionService} from './mission.service'
import {UtilisateurService} from './utilisateur.service'
=======
import { AuthComponent } from './auth/auth.component'


import { LoginService } from './login/login.service'
import { MissionService } from './mission.service'
import {UtilisateurService} from './utilisateur.service';
>>>>>>> origin/master

angular.module('app', [RouteModule, ngCookies])
.value('API_URL', window.API_URL)
.component('accueil', AccueilComponent)
.component('barnav', NavBarComponent)
.component('loginComponent', LoginComponent)
.component('mission', MissionComponent)
.component('missionValidation', MissionValidationComponent)
.component('missionCreation', MissionCreationComponent)
.component('utilisateur', UtilisateurComponent)

.component('auth', AuthComponent)

// ici 'LoginService' est le nom du service que je vais injecter dans mon controller (dans le component)
.service('LoginService', LoginService)
.service('MissionService', MissionService)
.service('UtilisateurService', UtilisateurService)

.config(route)
