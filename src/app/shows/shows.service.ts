import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ShowsService {
  serverUrl = "http://localhost:60100/"

  constructor(private http: HttpClient) {

  }

  getShows() {
    return this.http.get(`${this.serverUrl}api/shows`)
      .pipe(catchError((err) => {
        return of(false)
      }))
  }

  getShowsOfMovie(id : number) {
    return this.http.get(`${this.serverUrl}api/shows/movie/${id}`)
      .pipe(catchError((err) => {
        return of(false)
      }))
  }

}
