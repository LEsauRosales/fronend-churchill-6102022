import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

export interface UserData {
  name  :  string;
  agency  :  string;
  business_unit : string;
  region : string;
}

@Component({
  selector: 'app-dialog-drivers',
  templateUrl: './dialog-drivers.component.html',
  styleUrls: ['./dialog-drivers.component.scss']
})
export class DialogDriversComponent implements OnInit {

  displayedColumns: string[] = ['name', 'agency', 'business_unit', 'region'];
dataSourceDrivers = new MatTableDataSource();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ///PAGINATOR
  ngAfterViewInit() {
    this.dataSourceDrivers.paginator = this.paginator;
    this.dataSourceDrivers.sort = this.sort;
  }

  ///FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDrivers.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDrivers.paginator) {
      this.dataSourceDrivers.paginator.firstPage();
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
