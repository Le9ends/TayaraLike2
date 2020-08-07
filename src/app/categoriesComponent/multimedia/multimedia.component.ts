import { MultimediaService } from './../../multimedia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
  items : Array<{
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
    }>  

  constructor(private multi : MultimediaService ) { }

  ngOnInit(): void {
    this.getItemsByCategory()
  }
  getItemsByCategory () {
    this.multi.getItemByCategory().subscribe((result : any) => {
      this.items = result
      }),( (err) => {
        console.log(err)
      })
  }
}
