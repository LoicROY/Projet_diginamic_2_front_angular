import { GeneriqueComponent } from 'src/app/generique/generique.component';
import { JwtService } from 'src/app/service/jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends GeneriqueComponent implements OnInit {

  constructor(public jwtService: JwtService) {
      super();
  }

  ngOnInit(): void {
  }

}
