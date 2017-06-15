import angular from 'angular';
import RouteModule from 'angular-route';

import 'bootstrap/dist/css/bootstrap.css';

import { route } from './app.route';

import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './navbar/navbar.component';
import { LoginComponent} from './login/login.component';
import {MissionComponent} from './mission/mission.component'
import {UtilisateurComponent} from './utilisateur/utilisateur.component'


import { LoginService } from './login/login.service'
import { MissionService } from './mission.service'
import {UtilisateurService} from './utilisateur.service';

angular.module('app', [RouteModule])

.value( 'API_URL', API_URL)

.component('accueil', AccueilComponent)
.component('barnav', NavBarComponent)
.component('loginComponent',LoginComponent)
.component('mission', MissionComponent)
.component('utilisateur', UtilisateurComponent)

// ici 'LoginService' est le nom du service que je vais injecter dans mon controller (dans le component)
.service ('LoginService', LoginService )
.service ('MissionService', MissionService)
.service('UtilisateurService',UtilisateurService)

.config(route);
