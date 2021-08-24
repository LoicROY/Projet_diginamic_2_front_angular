import { JwtService } from 'src/app/service/jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public jwtService: JwtService) { }

  ngOnInit(): void {
  }

}
