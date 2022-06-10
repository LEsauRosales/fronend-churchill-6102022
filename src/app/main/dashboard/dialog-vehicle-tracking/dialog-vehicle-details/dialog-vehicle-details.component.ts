import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

export interface PeriodicElement {
  economico: string;
  conductor: string;
  velocidad: string;
  incidencia: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {economico: '1258', conductor: 'Roberto García', velocidad: '90 km/h', incidencia: 'Desvío de ruta', fecha: '14/05/2021'},
];

@Component({
  selector: 'app-dialog-vehicle-details',
  templateUrl: './dialog-vehicle-details.component.html',
  styleUrls: ['./dialog-vehicle-details.component.scss']
})

export class DialogVehicleDetailsComponent implements OnInit {

  displayedColumns: string[] = ['economico', 'conductor', 'velocidad', 'incidencia', 'fecha'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  lat = 23.8519757;
  lng = -103.017743;
  zoom = 6;

  ngOnInit(): void {}
  
}