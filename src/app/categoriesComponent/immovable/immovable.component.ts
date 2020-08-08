import { ImmovableService } from './../../immovable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immovable',
  templateUrl: './immovable.component.html',
  styleUrls: ['./immovable.component.css']
})
export class ImmovableComponent implements OnInit {
  items : Array<{
    productName: String;
    productPrice: Number;
    description: String;
    category: String;
    fileName: string;
    }>  

  constructor(private imm : ImmovableService) { }

  ngOnInit(): void {
    this.getItemsByCategory()
  }
  getItemsByCategory () {
    this.imm.getItemByCategory().subscribe((result : any) => {
      this.items = result
      }),( (err) => {
        console.log(err)
      })
  }
}
