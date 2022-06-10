import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog-reports',
  templateUrl: './dialog-reports.component.html',
  styleUrls: ['./dialog-reports.component.scss']
})
export class DialogReportsComponent implements OnInit {

  imageSelected = "assets/images/Reports/accidente.jpeg"

  constructor() { }

  ngOnInit(): void {
  }

  setImage1(){
    console.log(this.imageSelected);
    this.imageSelected = 'assets/images/Reports/accidente-1.jpeg'
 
    console.log(this.imageSelected);
  }

  setImage2(){
    console.log(this.imageSelected);
    this.imageSelected = 'assets/images/Reports/accidente-2.jpeg'
  
    console.log(this.imageSelected);
  }

  setImage3(){
    console.log(this.imageSelected);
    this.imageSelected = 'assets/images/Reports/accidente.jpeg'
    console.log(this.imageSelected);
  }


}

