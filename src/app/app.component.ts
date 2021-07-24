import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MPlexBooker';

  constructor(private auth: AuthService, private router: Router){

  }
  ngOnInit() {
    this.auth.checkAuthenticationStatus().subscribe()
  }

}
