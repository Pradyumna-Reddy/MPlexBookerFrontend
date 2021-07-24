import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AuthService } from "src/app/user/auth.service";
import { BookingService } from "../booking/booking.service";

@Injectable()
export class UserBookingsResolver implements Resolve<any> {
  constructor(private bookingService: BookingService,private auth: AuthService) {

  }

  resolve() {
    return this.bookingService.getUserBookings(this.auth.id)
  }
}
