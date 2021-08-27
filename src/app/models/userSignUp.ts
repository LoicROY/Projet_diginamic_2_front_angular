import { Departement } from './departement';
import { Salarie } from "./salarie";

export interface UserSignUp {
    dateArrivee?:string,
    dateDeNaissance?: string,
    email?: string,
    departement?: Departement,
    manager?: Salarie,
    nom?: string,
    password?: string,
    prenom?: string,
    type: ('Salarie' | 'Manager' | 'Administrateur')
}

export interface UserSignUpError {
    dateArrivee?:string,
    dateDeNaissance?: string,
    email?: string,
    departement?: Departement,
    manager?: Salarie,
    nom?: string,
    password?: string,
    prenom?: string,
}