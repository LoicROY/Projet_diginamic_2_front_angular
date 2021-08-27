import { Option } from './../../../models/option';
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
    public options!: Option[];

    /**
    * nom du composant
    */
    @Input()
    public name!: string;

    /**
     * Désactive le radio button
     */
     @Input()
     public disabled: boolean = false;

    
    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    /**
     * Propagation du changement du model
     */
     public modelChange(option: any): void {        
        this.radioBtnModel = option;
        this.radioBtnModelChange.emit(this.radioBtnModel);        
    }

    public isCheck(value: any): boolean {
        return value === this.radioBtnModel;
    }

}
