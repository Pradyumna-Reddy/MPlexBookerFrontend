import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  currentUser: any
  id: number = 0
  serverUrl = "http://localhost:60100/"
  constructor (private http: HttpClient, private router: Router) {
  }

  loginUser(email: any, password: any) {
    let body = `userName=${email}&password=${password}&grant_type=password`
    let options = { headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded'}) }

    return this.http.post(this.serverUrl+'api/token', body, options)
      .pipe(tap((val) => {
        let data = val as { [key: string]: any }
        localStorage.setItem("mplex_token", data["access_token"])
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
  }

  registerUser(user: any) {
    delete user.rpassword
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
    return this.http.post(this.serverUrl+'api/User/Register', user, options)
  }

  isAuthenticated() {
    return !!this.currentUser
  }

  checkAuthenticationStatus() {
      let options = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
         'Authorization': `Bearer ${localStorage.getItem("mplex_token")}`
      }) }
      return this.http.get(this.serverUrl+'api/user/claims', options)
      .pipe(tap((val) => {
        if(val) {
          let data = val as { [key: string]: any }
          this.currentUser = data.userName
          this.id = data.id
        }
      }))
      .pipe(catchError(err => {
        if(err.status == 401){
          this.logout();
        }
        return of(false)
      }))
  }

  logout() {
    this.currentUser = undefined
    this.id = 0
    localStorage.removeItem("mplex_token")
    this.router.navigate(['login'])
  }
}
