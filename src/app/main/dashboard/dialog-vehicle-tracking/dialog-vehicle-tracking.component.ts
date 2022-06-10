import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVehicleDetailsComponent } from './dialog-vehicle-details/dialog-vehicle-details.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

export interface UserData {
  economico: string;
  conductor: string;
  velocidad: string;
  incidencia: string;
  fecha: string;
}

const VELOCIDAD: string[] = [
 '1258', 'Roberto García', '90 km/h', 'Choque', 'Mayo'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-dialog-vehicle-tracking',
  templateUrl: './dialog-vehicle-tracking.component.html',
  styleUrls: ['./dialog-vehicle-tracking.component.scss']
})

export class DialogVehicleTrackingComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['economico', 'conductor', 'velocidad', 'incidencia', 'fecha'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {

    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   
   function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      economico: Math.round(Math.random() * 100).toString(),
      velocidad: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
      conductor: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
      incidencia: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
      fecha: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
    };
   }}

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // lat = 23.8519757;
  // lng = -103.017743;
  // zoom = 6;

  ngOnInit(): void {
    let timerInterval
    Swal.fire({
      titleText: 'Cargando datos',
      html: '<b>Por favor espere . . . .</b>',
      timer: 2000,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  openDialogVehicleDetails  () {
  this.dialog.open(DialogVehicleDetailsComponent);
}
}

///

// export interface PeriodicElement {
//   economico: number;
//   conductor: string;
//   velocidad: string;
//   incidencia: string;
//   fecha: string;
// }

// {economico: 1258,  conductor: 'Roberto García', velocidad: '90 km/h', incidencia: 'Choque', fecha: 'Mayo'},

// displayedColumns: string[] = ['economico', 'conductor', 'velocidad', 'incidencia', 'fecha',];