import { ClothesService } from './../../clothes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  items : Array<{
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
    }>  
  constructor(private clothes : ClothesService) { }

  ngOnInit(): void {
    this.getItemsByCategory()
  }
  
  getItemsByCategory () {
    this.clothes.getItemByCategory().subscribe((result : any) => {
      this.items = result
      }),( (err) => {
        console.log(err)
      })
  }

}
