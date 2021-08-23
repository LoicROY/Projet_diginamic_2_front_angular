import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button[value]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    /**
     * Texte du button
     */
     @Input()
     public value!: string;

    /**
     * Désactive le button
     */
    @Input()
    public disabled: boolean = false;

    /**
     * Définit le type (si submit ou reset)
     */
    @Input()
    public type: ('' | 'submit' | 'reset') = '';


    constructor() { }

    ngOnInit(): void {
    }

}
