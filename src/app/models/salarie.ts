import { Departement } from "./departement";
import { Absence } from "./absence";
import { Authority } from "./authority";

export interface Salarie {
    absences: Absence[],
    authorities: Authority[],
    dateArrivee: Date,
    dateDeNaissance: Date,
    departement: Departement,
    email: string,
    id?: number,
    manager?: Salarie,
    nom: string,
    password: string,
    prenom: string,
    soldeCP?: number,
    soldeRTT?: number,
    type: ('Salarie' | 'Manager' | 'Administrateur')
}