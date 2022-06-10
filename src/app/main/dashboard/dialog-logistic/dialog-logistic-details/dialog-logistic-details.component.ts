import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-logistic-details',
  templateUrl: './dialog-logistic-details.component.html',
  styleUrls: ['./dialog-logistic-details.component.scss']
})
export class DialogLogisticDetailsComponent implements OnInit {

  constructor() { }

  lat = 23.8519757;
  lng = -103.017743;
  zoom = 6;

  ngOnInit(): void {
    
  }

}
