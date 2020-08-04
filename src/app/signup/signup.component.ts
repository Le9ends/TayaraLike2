import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    cpassword: '',
  };
  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    const errors = [];
    if (this.credentials.password != this.credentials.cpassword) {
      console.log('Passwords do not match');
      errors.push('Passwords do not match');
    }
    
      this.auth.register(this.credentials).subscribe(
        () => { 
            this.router.navigateByUrl('/login');
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
