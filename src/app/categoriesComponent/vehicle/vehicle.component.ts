import { VehicleService } from './../../vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  items : Array<{
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
    }>  
  constructor(private vehicle : VehicleService) { }

  ngOnInit(): void {
    this.getItemsByCategory()
  }
  
  getItemsByCategory () {
    this.vehicle.getItemByCategory().subscribe((result : any) => {
      this.items = result
      }),( (err) => {
        console.log(err)
      })
  }

}
