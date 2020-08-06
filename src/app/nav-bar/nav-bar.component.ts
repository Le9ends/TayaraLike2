// import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // term : String;
  // items : Array<{
  //   productName: String;
  //   productPrice: Number;
  //   description: String;
  //   category: String;
  // }>

  constructor(public auth:AuthenticationService){ }
  
  ngOnInit(): void {
   
  }
 
}
