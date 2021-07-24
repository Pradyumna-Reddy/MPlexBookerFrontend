import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class BookingService {
  serverUrl = "http://localhost:60100/"

  constructor(private http: HttpClient) {

  }

  bookTickets(userId: number, showId: number, numberOfBookings: number) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
    let body = { userId, showId, numberOfBookings }
    return this.http.post(`${this.serverUrl}api/booking`, body, options)
      .pipe(catchError(err => {
        return of(false)
      }))
  }

  getUserBookings(id: number) {
    return this.http.get(`${this.serverUrl}api/booking/user/${id}`)
    .pipe(catchError(err => {
      return of(false)
    }))
  }

  removeBooking(id: number) {
    return this.http.delete(`${this.serverUrl}api/booking/${id}`)
    .pipe(catchError(err => {
      return of(false)
    }))
  }

  changeBookingRating(id: number, rating: number) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

    return this.http.post(`${this.serverUrl}api/movie/booking/rating`, {id, rating} , options)
    .pipe(catchError(err => {
      return of(false)
    }))
  }
}
