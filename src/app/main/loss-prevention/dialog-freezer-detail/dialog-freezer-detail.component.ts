import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-freezer-detail',
  templateUrl: './dialog-freezer-detail.component.html',
  styleUrls: ['./dialog-freezer-detail.component.scss']
})
export class DialogFreezerDetailComponent implements OnInit {

  imageSelected = '../../assets/images/logos/congelador0.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  setImage1(){
    console.log(this.imageSelected);
    this.imageSelected = '../../assets/images/logos/congelador0.jpg'

    console.log(this.imageSelected);
  }

  setImage2(){
    console.log(this.imageSelected);
    this.imageSelected = '../../assets/images/logos/congelador1.jpg'
 
    console.log(this.imageSelected);
  }

  setImage3(){
    console.log(this.imageSelected);
    this.imageSelected = '../../assets/images/logos/congelador2.jpg'
    console.log(this.imageSelected);
  }

  setImage4(){
    console.log(this.imageSelected);
    this.imageSelected = '../../assets/images/logos/congelador3.jpg'
 
    console.log(this.imageSelected);
  }

  setImage5(){
    console.log(this.imageSelected);
    this.imageSelected = '../../assets/images/logos/congelador4.jpg'
 
    console.log(this.imageSelected);
  }

  simulateAdd(){
    console.log("add sada");}

}
