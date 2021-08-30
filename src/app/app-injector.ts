/**
 * Enregistre l'injecteur du module globale de l'application qui contient les services singletons
 * Permet de récupérer des singletons de service globaux sans passer par l'injection constructeur
 * injection constructeur contraignante car l'on doit modifier l'appel super() de tous les enfants
 * (dans GeneriqueComponent par exemple)
 * 
 * https://stackoverflow.com/questions/39409328/storing-injector-instance-for-use-in-components
 */
import { Injector } from "@angular/core";

/**
 * Autorise l'utilisation de singleton via 'AppInjector.get(MyService)'
 */
export let AppInjector: Injector;

export function setAppInjector(injector: Injector): void {
    if (AppInjector) {
        // Ne devrait pas arriver
        console.error('erreur de programmation : AppInjector déjà set')
    } else {
        AppInjector = injector;
    }
}