import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    CalendarEvent,
    CalendarMonthViewBeforeRenderEvent,
    CalendarView,
} from 'angular-calendar';
import {
    ChangeDetectionStrategy,
    ViewEncapsulation,
} from '@angular/core';
import { Absence } from 'src/app/models/absence';

@Component({
    selector: 'app-calendar[absences]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './calendar.component.html',
    styles: [
        `
      .cal-month-view .bg-pink,
      .cal-week-view .cal-day-columns .bg-pink,
      .cal-day-view .bg-pink {
        background-color: hotpink !important;
      }
    `,
    ],
})

export class CalendarComponent implements OnInit {

    @Input() absences!: Absence[];

    @Input() view: CalendarView = CalendarView.Month;

    @Input() viewDate: Date = new Date();

    @Input() locale: string = 'en';

    @Output() viewChange = new EventEmitter<CalendarView>();

    @Output() viewDateChange = new EventEmitter<Date>();

    events: CalendarEvent[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
        renderEvent.body.forEach((day) => {
            this.absences.forEach((absence) => {
                // Cas d'une absence obligatoire
                if (day.inMonth && absence.date && day.date == new Date(absence.date)) {
                    switch (absence.type) {
                        case 'RttEmployeur': day.cssClass = 'bg-warning'; break;
                        case 'JourFerie': day.cssClass = 'bg-primary'; break;
                    }
                }
                // Cas d'une absence choisie
                if (day.inMonth && !absence.date && day.date >= new Date(absence.dateDebut!) && day.date <= new Date(absence.dateFin!)) {
                    switch (absence.type) {
                        case 'CongePaye': day.cssClass = 'bg-danger'; break;
                        case 'CongeSansSolde': day.cssClass = 'bg-info'; break;
                        case 'CongeAnticipe': day.cssClass = 'bg-success'; break;
                        case 'RttEmploye': day.cssClass = 'bg-secondary'; break;
                    }
                }
            })
        });
    }
}

