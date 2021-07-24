import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ShowsService } from "../shows.service";

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private showsService: ShowsService) {

  }

  resolve(route : ActivatedRouteSnapshot) {
    return this.showsService.getShowsOfMovie(+route.params['id']);
  }
}
