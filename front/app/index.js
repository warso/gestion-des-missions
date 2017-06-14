import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './navbar/navbar.component';


angular.module('app', [RouteModule])
.value( 'API_URL', API_URL)
.component('accueil', AccueilComponent)
.component('barnav', NavBarComponent)
.config(route);
