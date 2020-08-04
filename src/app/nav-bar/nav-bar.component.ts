import { Component } from '@angular/core';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public auth:AuthenticationService){ }
  
 

}
