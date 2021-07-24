import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  a { cursor: pointer; }
  `]
})
export class NavBarComponent {
  constructor (public auth: AuthService) {

  }
}
