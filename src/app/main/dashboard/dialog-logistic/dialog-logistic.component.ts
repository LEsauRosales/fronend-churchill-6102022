import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';
import { DialogLogisticDetailsComponent } from './dialog-logistic-details/dialog-logistic-details.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

export interface UserData {
  transportista: string;
  puntaje: string;
  calificacion: string;
  duracion: string;
  conductor: string;
  vehiculo: string;
  gps: string;
}

@Component({
  selector: 'app-dialog-logistic',
  templateUrl: './dialog-logistic.component.html',
  styleUrls: ['./dialog-logistic.component.scss']
})

export class DialogLogisticComponent implements OnInit, AfterViewInit {

  ///TABLE 
  displayedColumns: string[] = ['transportista', 'puntaje', 'calificacion', 'duracion', 'conductor', 'vehiculo', 'gps'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

   panelOpenState = false;

  constructor(public dialog: MatDialog) {
}
  
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



  openDialogLogisticDetails() {
    this.dialog.open(DialogLogisticDetailsComponent);
  }
}

