import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  imagepath="https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg"
  shows: any[] = []
  movie: any
  times: any[] = []
  SelectedShow: any
  maxTicketsForSelectedShow: number = 10
  ticketsArray: any[] = []
  remainingSeats: number = 0
  bookingForm = new FormGroup({
    showSelect: new FormControl('', Validators.required),
    noofTickets: new FormControl('',Validators.required)
  })


  constructor(private route: ActivatedRoute,
      private book: BookingService,
      private auth: AuthService,
      private router: Router) { }

  ngOnInit(): void {
    this.shows = this.route.snapshot.data["movieShows"]
    this.movie = this.shows[0]?.movie
    this.times = this.shows.map((s => [DateTime(s.date), s.id]))
    console.log(this.times)
    console.log(this.shows)
  }

  SeatsAndTickets(){
    if(this.bookingForm.controls.showSelect.value != '') {
      this.SelectedShow = this.shows.find(s => s.id == this.bookingForm.controls.showSelect.value)
      this.maxTicketsForSelectedShow = Math.min(
        this.maxTicketsForSelectedShow,
        this.SelectedShow.remainingSeats)
      this.remainingSeats = this.SelectedShow.remainingSeats
      this.ticketsArray = Array(this.maxTicketsForSelectedShow).fill(0).map((x,i)=> i+1)
    }
  }

  onTicketsSelected(){
    this.remainingSeats = this.SelectedShow.remainingSeats
    if(this.bookingForm.controls.noofTickets.value != "") {
      this.remainingSeats -= this.bookingForm.controls.noofTickets.value
    }
  }

  bookTickets(showSelect: number, noofTickets: number){
    this.book.bookTickets(this.auth.id, showSelect, noofTickets).subscribe(() => {
    this.router.navigate(['bookings'])
    })
  }

}
function DateTime(date_String: string){
  let date = new Date(date_String)
  return `${date.toLocaleDateString('en-IN', { weekday: 'short', year: '2-digit', month: 'short', day: 'numeric' })} \
  ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}
