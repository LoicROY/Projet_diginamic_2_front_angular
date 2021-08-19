import { GeneriqueComponent } from './../../../generique/generique.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-radio-button[radioBtnModel][name][options]',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends GeneriqueComponent implements OnInit {

    /**
     * Model à bindé
     */
    @Input()
    public radioBtnModel?: any;

    /**
     * Evenement sur le model change
     */
    @Output()
    private readonly radioBtnModelChange: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Les données à lister en radio button
     */
    @Input()
    public options!: string[];

    /**
    * nom du composant
    */
    @Input()
    public name!: string;

    
    constructor() {
        super();
    }

    ngOnInit(): void {
        // TODO voir avec rossi pour régler le problème de binding
        // if (!this.radioBtnModel) {
        //     this.radioBtnModel = this.options[0];
        //     this.radioBtnModelChange.emit(this.radioBtnModel);
        // }
    }

    /**
     * Propagation du changement du model
     */
     public modelChange(option: any): void {        
        this.radioBtnModel = option;
        this.radioBtnModelChange.emit(this.radioBtnModel);        
    }

    public isCheck(option: any): boolean {
        return option === this.radioBtnModel;
    }

}
