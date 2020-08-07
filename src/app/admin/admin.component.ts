import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../authentication.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  details: UserDetails
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.admin().subscribe(
      admin => {
        this.details = admin
      },
      err => {
        console.error(err)
      }
    )
  }
}
