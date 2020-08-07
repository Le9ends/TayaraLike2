import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.css"],
})
export class AddProfileComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  public selectedFile;
  productName = "";
  price = "";
  description = "";
  handleName(e) {
    this.productName = e.target.value;
  }
  handlePrice(e) {
    this.price = e.target.value;
  }
  handleDescription(e) {
    this.description = e.target.value;
  }
  fileHandler(e) {
    this.selectedFile = e.target.files[0];
  }
  clickHandler() {
    const uploadData = new FormData();
    console.log("image : ", this.selectedFile);
    uploadData.append("imageFile", this.selectedFile);
    console.log("after : ", uploadData);
    this.httpClient
      .post("http://localhost:5000/test", uploadData)
      .subscribe((res) => {});
  }
  ngOnInit(): void {}
}
