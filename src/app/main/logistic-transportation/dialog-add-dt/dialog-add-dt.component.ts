import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  conductor?: string;
  puntos?: number;
  vehiculo?: string;
  transportista?: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    { conductor: 'Juan Gomez',  puntos: 80, vehiculo: 'Mazda', transportista: 'flotas' },
    { conductor: 'Alberto González',  puntos: 90, vehiculo: 'Mazda', transportista: 'flotas' },
    { conductor: 'Julio Aparicio',  puntos: 50, vehiculo: 'Mazda', transportista: 'flotas' },
    { conductor: 'Roberto Ramirez',  puntos: 80, vehiculo: 'Mazda', transportista: 'flotas' },
  ];

@Component({
  selector: 'app-dialog-add-dt',
  templateUrl: './dialog-add-dt.component.html',
  styleUrls: ['./dialog-add-dt.component.scss']
})
export class DialogAddDTComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['conductor', 'vehiculo',  'transportista', 'puntos'];
  dataSource = new MatTableDataSource ( ELEMENT_DATA);

}
