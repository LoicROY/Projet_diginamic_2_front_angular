import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
