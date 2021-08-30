import { GeneriqueComponent } from './../../../generique/generique.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-text-area[textAreaModel][label][id]',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends GeneriqueComponent implements OnInit {
    /**
     * Model de donnée bindé
     */
    @Input()
    public textAreaModel?: string;

    /**
     * Evennement à propager lors d'un modelChange
     */
    @Output()
    public textAreaModelChange: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Label de l'input
     */
    @Input()
    public label!: string;

    /**
     * Id unique de l'input
     */
    @Input()
    public id!: string;

    /**
     * Spécifie si le champs est optionnel
     */
    @Input()
    public required: boolean = false;

    /**
     * Désactive l'input
     */
    @Input()
    public disabled: boolean = false;

    /**
     * Définit la taille du textArea
     */
    @Input()
    public size: ('small' | 'medium' | 'large') = 'small';

    /**
     * Valeur de l'autocomplete
     */
    @Input()
    public autocomplete: string = 'off';

    /**
     * Valeur du placeholder
     */
    @Input()
    public placeholder: string = '';

    /**
     * Erreur à afficher sous le champ
     */
    @Input()
    public erreur?: string;

    /**
     * Evenement lors du changement de l'erreur
     */
    @Output()
    public erreurChange: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Evenement lors de sortie de l'input
     */
    @Output()
    public blur: EventEmitter<EventTarget> = new EventEmitter<EventTarget>();


    constructor() {
        super();
    }

    public ngOnInit(): void {
        if (this.textAreaModel) {
            this.checkValidite();
        }
    }

    /**
     * Vérifie la validité de la saisie
     */
    public checkValidite(): void {
        if (!this.textAreaModel && this.required) {
            this.erreur = this.ERREUR.REQUIRED;
        }
    }

    /**
     * Propagation du changement du model
     */
    public modelChange(event: any): void {
        // On supprime le message d'erreur
        this.erreur = undefined;
        this.erreurChange.emit(this.erreur);

        // On set le model
        this.textAreaModel = event.target.value;

        // On propage le changement
        this.textAreaModelChange.emit(this.textAreaModel);
    }

    /**
     * Controle du format à la sortie du champs
     * @param event 
     */
    public onBlurHandler(event: any): void {
        this.checkValidite();
        this.blur.emit(event);
    }

    getCols(): number {
        let retour = null;
        switch (this.size) {
            case 'small':
                retour = 33;
                break;

            case 'medium':
                retour = 45;
                break;

            case 'large':
                retour = 60;
                break;
        }
        return retour;
    }

    getRows(): number {
        let retour = null;
        switch (this.size) {
            case 'small':
                retour = 7;
                break;

            case 'medium':
                retour = 12;
                break;

            case 'large':
                retour = 18;
                break;
        }
        return retour;
    }
}
