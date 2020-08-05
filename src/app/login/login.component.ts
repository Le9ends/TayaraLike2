import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    cpassword: ''
  };
  constructor(private auth: AuthenticationService, private router: Router) {}
  login() {
    this.auth.login(this.credentials).subscribe(
      (res) => {
        if (!res.token) {
          alert('Wrong Email or Password');
          this.credentials.password = '';
        } else {
          this.router.navigateByUrl('/home');
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
