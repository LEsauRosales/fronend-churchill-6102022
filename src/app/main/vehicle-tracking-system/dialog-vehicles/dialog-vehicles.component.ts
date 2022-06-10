import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

export interface UserData {
  asset_id  :  string;
  eco: string;
  agency  :  string;
  business_unit : string;
  region : string;
}

@Component({
  selector: 'app-dialog-vehicles',
  templateUrl: './dialog-vehicles.component.html',
  styleUrls: ['./dialog-vehicles.component.scss']
})
export class DialogVehiclesComponent implements OnInit {

  displayedColumns: string[] = ['asset_id', 'eco', 'agency', 'business_unit', 'region'];
  dataSourceVehicles = new MatTableDataSource();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ///PAGINATOR
  ngAfterViewInit() {
    this.dataSourceVehicles.paginator = this.paginator;
    this.dataSourceVehicles.sort = this.sort;
  }

  ///FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVehicles.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceVehicles.paginator) {
      this.dataSourceVehicles.paginator.firstPage();
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
