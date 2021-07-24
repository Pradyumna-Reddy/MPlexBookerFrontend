import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { BookingComponent } from "./shows/booking/booking.component";
import { MovieResolver } from "./shows/booking/movie-resolver.service";
import { ShowsResolver } from "./shows/shows-resolver.service";
import { ShowsComponent } from "./shows/shows.component";
import { UserBookingsResolver } from "./shows/user-bookings/user-bookings-resolver.service";
import { UserBookingsComponent } from "./shows/user-bookings/user-bookings.component";
import { AuthResolver } from "./user/auth-resolver.service";
import { LoginFormComponent } from "./user/login.component";
import { RegisterFormComponent } from "./user/register.component";

export const appRoutes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'register', component: RegisterFormComponent
  },
  {
    path: 'shows', component: ShowsComponent, resolve: { auth: AuthResolver, shows: ShowsResolver }
  },
  {
    path: 'bookings', component: UserBookingsComponent, resolve: {auth: AuthResolver }, runGuardsAndResolvers: 'always'
  },
  {
    path: 'shows/movie/:id', component: BookingComponent, resolve: { auth: AuthResolver, movieShows: MovieResolver}
  },
  { path: '404' , component: Error404Component}
]
