import { Option } from './../../../models/option';
import { Component, Input, OnInit } from '@angular/core';
import { startOfMinute } from 'date-fns';
import { GeneriqueComponent } from 'src/app/generique/generique.component';
import { Absence } from 'src/app/models/absence';

@Component({
    selector: 'app-jours-feries',
    templateUrl: './jours-feries.component.html',
    styleUrls: ['./jours-feries.component.scss']
})
export class JoursFeriesComponent extends GeneriqueComponent implements OnInit {

    public annee?: string

    public mois?: string

    public nomMois: string[] = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre'
    ];

    public moisOptions: Option[] = [];

    public anneeOptions: Option[] = [
        { value: '2019', text: '2019' },
        { value: '2020', text: '2020' },
        { value: '2021', text: '2021' },
        { value: '2022', text: '2022' }
    ];

    @Input()
    public required: boolean = true;

    public absences: Absence[] = [];

    constructor() {
        super();
        this.nomMois.forEach((mois, index) => this.moisOptions.push(
            { value: index + 1, text: mois }
        ));
    }

    ngOnInit(): void {
        this.httpService.getAllJoursFeries().subscribe(
            JoursFeries => this.absences = JoursFeries,
            (data) => console.log(data)
        );
    }

}
