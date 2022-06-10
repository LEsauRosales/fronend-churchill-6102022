import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

export interface UserData {
  area: string;
  tipo: string;
  detalle: string;
  ubicacion: string;
  fecha: string;
}

const VELOCIDAD: string[] = [
  'Ice Cream', 'Ruta no disponible', 'Manifestación en rutas', 'Toledos', '25/05/2021'
 ];
 const NAMES: string[] = [
   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
 ];

@Component({
  selector: 'app-dialog-emergency-employee',
  templateUrl: './dialog-emergency-employee.component.html',
  styleUrls: ['./dialog-emergency-employee.component.scss']
})
export class DialogEmergencyEmployeeComponent implements OnInit, AfterViewInit {
  
displayedColumns: string[] = [ 'area', 'tipo', 'detalle', 'ubicacion', 'fecha'];
dataSource: MatTableDataSource<UserData>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  // Assign the data to the data source for the table to render
  this.dataSource = new MatTableDataSource(users);
 
 function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    area: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
    tipo: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
    detalle: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
    ubicacion: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
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

}
