import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './user/register.component';
import { LoginFormComponent } from './user/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { ShowsComponent } from './shows/shows.component';
import { ShowsResolver } from './shows/shows-resolver.service';
import { ShowsService } from './shows/shows.service';
import { MovieThumbnailComponent } from './shows/movie-thumbnail/movie-thumbnail.component';
import { BookingComponent } from './shows/booking/booking.component';
import { MovieResolver } from './shows/booking/movie-resolver.service';
import { BookingService } from './shows/booking/booking.service';
import { Error404Component } from './errors/404.component';
import { AuthResolver } from './user/auth-resolver.service';
import { UserBookingsComponent } from './shows/user-bookings/user-bookings.component';
import { UserBookingsResolver } from './shows/user-bookings/user-bookings-resolver.service';
import { RatingInputComponent } from './common/rating-input/rating-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ShowsComponent,
    MovieThumbnailComponent,
    BookingComponent,
    Error404Component,
    UserBookingsComponent,
    RatingInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ShowsResolver,
    ShowsService,
    MovieResolver,
    BookingService,
    AuthResolver,
    UserBookingsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
