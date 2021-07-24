import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styles: [``]
})
export class LoginFormComponent {

  loginInvalid: boolean = false
  constructor(public auth: AuthService, private router: Router) {

  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onLogin() {
    this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((res) => {
        if(res){
          this.router.navigate(['shows'])
        }
      })
  }
}
