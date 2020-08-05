import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.css"],
})
export class AddProfileComponent implements OnInit {
  productName = "";
  price = "";
  description = "";
  constructor() {}
  handleName(e) {
    this.productName = e.target.value;
  }
  handlePrice(e) {
    this.price = e.target.value;
  }
  handleDescription(e) {
    this.description = e.target.value;
  }
  clickHandler() {
    // this.http
    //   .post<any>("https://jsonplaceholder.typicode.com/posts", {
    //     title: "Angular POST Request Example",
    //   })
    //   .subscribe((data) => {
    //     this.postId = data.id;
    //   });
  }
  ngOnInit(): void {}
}
