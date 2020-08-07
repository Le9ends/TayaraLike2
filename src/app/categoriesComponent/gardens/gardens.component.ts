import { GardensService } from './../../gardens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gardens',
  templateUrl: './gardens.component.html',
  styleUrls: ['./gardens.component.css']
})
export class GardensComponent implements OnInit {
  items : Array<{
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
    }>  
  constructor(private garden : GardensService) { }

  ngOnInit(): void {
    this.getItemsByCategory()
  }


  
  getItemsByCategory () {
    this.garden.getItemByCategory().subscribe((result : any) => {
      this.items = result
      }),( (err) => {
        console.log(err)
      })
  }
  

}
