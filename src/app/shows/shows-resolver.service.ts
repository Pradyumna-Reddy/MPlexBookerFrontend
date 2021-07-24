import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AuthService } from "../user/auth.service";
import { ShowsComponent } from "./shows.component";
import { ShowsService } from "./shows.service";

@Injectable()
export class ShowsResolver implements Resolve<any> {
  constructor(private showsService: ShowsService,private auth: AuthService) {

  }

  resolve() {
    return this.showsService.getShows()
  }
}
