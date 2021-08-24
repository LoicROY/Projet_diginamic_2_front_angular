# ProjetDiginamic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## URL du back déployé

https://projet-2-diginamic.herokuapp.com/

## URL du front déployé

https://loicroy.github.io/Projet_diginamic_2_front_angular/


## Texte

Le texte est séparé dans un dossier séparé et récupéré en tant que propriétés dans un composant parent de tous les autres composants.

## Components
-> dossier
+ component

-> generique
    + generique : composant parent de tous les autres et qui contient le code à propager (le texte pour le html et le service d'authentification)

-> shared
    -> formulairesComponents
        + checkbox
        + radioButton
        + input
        + textarea
        + select
        + buttonSubmit
        + buttonReset
    -> sidebar
        + sidebar
        -> components
            -> profil
                + profil
    -> navbar
        + navbar
    -> calendrier ???
    -> legende
        + legende
    
-> acceuil
    + accueil

-> pages
    -> accueil
        + acceuil
        --- + legend ---
        --- + calendrier ---
        -> components
            -> compteur
                + compteur
    -> demandeAbsence
        + demandeAbsence
        -> components
            -> absenceChoisie
                + absenceChoisie
            -> absenceObligatoire (si admin)
                + absenceObligatoire
    -> gererDemandes
        + gererDemandes
    -> visualiserDemande (si manager)
        + visualiserDemande
    -> historique
        + historique
        --- + legend ---
        --- + calendrier ---
    -> joursNonTravailler
        + joursNonTravailler
        -> components
            -> joursFerie
                + joursFerie
            -> rtt
                + rtt
    -> planning (si manager)
        + planning
        --- + legend ---
        --- + calendrier ---
        -> components
            -> histogramme
                + histogramme
    -> login
        + login
    -> export
        + export
        -> components
            -> exportPDF
                + exportPDF
            -> export CSV
                + exportCSV
