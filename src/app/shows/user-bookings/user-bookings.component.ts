import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { BookingService } from '../booking/booking.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {
  bookings: any[] = []
  imagepath="https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg"
  constructor(private router: Router, private bookingService: BookingService, private auth: AuthService) { }

  ngOnInit(): void {
    this.bookingService.getUserBookings(this.auth.id).subscribe((data)=>
    {
      this.bookings = data as any[]
    })
  }

  isFutureShow(show: any): boolean {
    return Date.parse(show.date) > Date.now()
  }

  CancelBooking(id: number) {
    this.bookingService.removeBooking(id).subscribe(()=>{
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
        this.router.navigate([currentUrl])
      })
    })
  }

  changeRating(evt: number, id: number){
    this.bookingService.changeBookingRating(id, evt).subscribe(()=>{
      this.bookings.find(b => b.id == id).rating = evt;
    })
  }

  returnsRating(){
    return
  }

}
