import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterFormComponent {

  constructor(public auth: AuthService) {

  }

  registerForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rpassword: new FormControl('', Validators.required),
  })

  onRegister() {
    this.auth.registerUser(this.registerForm.value).subscribe( (val) => {
      if(val) {
        console.log("Registration sucess")
      }
    })
    console.log(this.registerForm.value)
  }
}
