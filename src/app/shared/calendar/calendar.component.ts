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
                // if (absence.type === "CongePaye") {
                //     if (day.date >= absence.dateDebut! && day.date <= absence.dateFin! && day.inMonth) {
                //         day.cssClass = 'bg-danger';
                //     }
                // }
                // if (absence.type === "RttEmploye") {
                //     if (day.date >= absence.dateDebut! && day.date <= absence.dateFin! && day.inMonth) {
                //         day.cssClass = 'bg-primary';
                //     }
                // }
                // if (absence.type === "RttEmployeur") {
                //     if (day.date >= absence.jour! && day.date <= absence.jour! && day.inMonth) {
                //         day.cssClass = 'bg-success';
                //     }
                // }
                // if (absence.type === "CongeSansSolde") {
                //     if (day.date >= absence.dateDebut! && day.date <= absence.dateDebut! && day.inMonth) {
                //         day.cssClass = 'bg-secondary';
                //     }
                // }
                // if (absence.type === "JourFerie") {
                //     if (day.date >= absence.jour! && day.date <= absence.jour! && day.inMonth) {
                //         day.cssClass = 'bg-warning';
                //     }
                // }

            })
        });
    }



}

