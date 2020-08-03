import { Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items: Array<{name: string}>;
  term : String

  constructor(public auth:AuthenticationService){ }
  
  ngOnInit(): void {
    this.items = new Array({ name: "archie" },{ name: "jake" }, { name: "richard" })
    this.term = ''
  }

}
