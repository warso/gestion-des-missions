# gestion-des-missions

## Intégration continue

* Jenkins : [lien](http://d07-jenkins.cleverapps.io/job/Gestion%20Des%20Missions/)

* Sonar (analyse du code) : [lien](http://d07-sonar.cleverapps.io/dashboard?id=gestion-des-missions)

* Application : [lien](https://diginamicformation.github.io/gestion-des-missions/)

## Conception

* Back
    * API:
        * GET /missions : liste des missions
        * GET /utilisateur/{matricule} : recuperer utilisateur par matricule
    * Services:
    * Controller :
      * Utilisateur
      * Mission
    * Entity:
        * Utilisateur
        * Missions
       
* Front
    * Page :
      * /missions: afichage des missions
    * Components:
      * utilisateur
      *mission
      * nav-bar : barre de navigation
    * Services:
      * utilisateur

## Video 
 * https://www.youtube.com/watch?v=4Y6LM4Y_K6c (aide pour la page login)
