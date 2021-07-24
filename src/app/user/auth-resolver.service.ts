import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AuthService } from "../user/auth.service";

@Injectable()
export class AuthResolver implements Resolve<any> {
  constructor(private auth: AuthService) {

  }

  resolve() {
    return this.auth.checkAuthenticationStatus()
  }
}
