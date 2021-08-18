import { GeneriqueComponent } from './../../../generique/generique.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input[inputModel][id][label][type]',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent extends GeneriqueComponent implements OnInit {

    /**
     * Model de donnée bindé
     */
    @Input()
    public inputModel?: string;

    /**
     * Evennement à propager lors d'un modelChange
     */
    @Output()
    public inputModelChange: EventEmitter<string> = new EventEmitter<string>();

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
     * Type de l'input
     */
    @Input()
    public type!: ('text' | 'password' | 'tel' | 'email' | 'date');

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
     * Impose une longueur max
     */
    @Input()
    public maxlength?: number;

    /**
     * Impose une longueur min
     */
    @Input()
    public minlength?: number;

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
        if (this.inputModel) {
            this.checkValidite();
        }
    }

    /**
     * Vérifie la validité de la saisie
     */
    public checkValidite(): void {
        if (!this.inputModel && this.required) {
            this.erreur = this.ERREUR.REQUIRED;
        }

        // Si champs nulle, pas de check de format
        if (!this.inputModel){
            return
        }

        switch (this.type) {
            case 'tel':
                if (!new RegExp(this.REGEX.TEL).test(this.inputModel!)) {
                    this.erreur = this.ERREUR.TEL_FORMAT;
                }
                break;
            
            case 'email':
                if (!new RegExp(this.REGEX.EMAIL).test(this.inputModel!)) {
                    this.erreur = this.ERREUR.EMAIL_FORMAT;
                }
                break;

            case 'date':
                if (!new RegExp(this.REGEX.DATE).test(this.inputModel!)) {
                    this.erreur = this.ERREUR.DATE_FORMAT;
                }
                break;
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
        this.inputModel = event.target.value;

        // On propage le changement
        this.inputModelChange.emit(this.inputModel);
    }

    /**
     * Controle du format à la sortie du champs
     * @param event 
     */
    public onBlurHandler(event: any): void {
        this.checkValidite();
        this.blur.emit(event);
    }
}
