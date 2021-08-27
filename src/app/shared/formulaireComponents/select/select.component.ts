import { Option } from './../../../models/option';
import { GeneriqueComponent } from './../../../generique/generique.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select[selectModel][options][name][label]',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends GeneriqueComponent implements OnInit {

  /**
     * Model à bindé
     */
   @Input()
   public selectModel?: any;

   /**
    * Evenement sur le model change
    */
   @Output()
   private readonly selectModelChange: EventEmitter<any> = new EventEmitter<any>();

   /**
    * Les données à lister
    */
   @Input()
   public options!: Option[];

   /**
    * nom du composant
    */
   @Input()
   public name!: string;

   /**
     * Label du select
     */
    @Input()
    public label!: string;

    /**
     * Spécifie si le champs est optionnel
     */
     @Input()
     public required: boolean = false;
 
     /**
      * Désactive le select
      */
     @Input()
     public disabled: boolean = false;

    /**
     * Evenement lors de sortie du select
     */
     @Output()
     public blur: EventEmitter<EventTarget> = new EventEmitter<EventTarget>();

   
   constructor() {
       super();
   }

   ngOnInit(): void {
       // TODO voir avec rossi pour régler le problème de binding
       // if (!this.selectModel) {
       //     this.selectModel = this.options[0];
       //     this.selectModelChange.emit(this.selectModel);
       // }
   }

   /**
    * Propagation du changement du model
    */
    public modelChange(): void {
       this.selectModelChange.emit(this.selectModel);        
   }

   /**
     * Controle du format à la sortie du champs
     * @param event 
     */
    public onBlurHandler(event: any): void {
        this.blur.emit(event);
    }

    public isSelect(option: any, option2: any): boolean {
        return option === option2;
    }

}
