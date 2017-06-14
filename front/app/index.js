import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './navbar/navbar.component';
import { LoginComponent} from './login/login.component';


const API_URL='http://localhost:8080'

angular.module('app', [RouteModule])
.value( 'API_URL', API_URL)
.component('accueil', AccueilComponent)
.component('barnav', NavBarComponent)
.component('login',LoginComponent)
.component('mission', MissionComponent)
.config(route);
