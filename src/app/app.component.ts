import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public title = 'projet-diginamic';

    public test?: string;
    public testRadioButton?: string;
    public datas: string[] = ["test", "test2"];
    public testTextArea?: string;
    public testTextAreaMedium?: string;
    public testTextAreaLarge?: string;
    public testSelect?: string;
    public datasSelect: string[] = ["testSelect", "testSelect2"];

}
