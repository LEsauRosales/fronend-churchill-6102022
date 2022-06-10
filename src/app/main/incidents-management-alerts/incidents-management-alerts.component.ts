
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogTwitterComponent } from './dialog-twitter/dialog-twitter.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogIncidentsDetailsComponent } from '../dashboard/dialog-incidents/dialog-incidents-details/dialog-incidents-details.component';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { IncidentsGen } from 'app/interfaces/twitter-accounts';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incidents-management-alerts',
  templateUrl: './incidents-management-alerts.component.html',
  styleUrls: ['./incidents-management-alerts.component.scss']
})
export class IncidentsManagementAlertsComponent implements OnInit {
  
  lastAt4LastIncidents: IncidentsGen [] = []

  displayedColumns: string[] = ['Tweet','Fecha','cuenta', 'categoria', 'palabraClave', 'tipoAlerta', 'nivelRiesgo', 'protocoloAccion', 'ubicacion'];
  dataSourceIncidents = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private incidentsServices:ChIncidentsApiService ) {}

ngAfterViewInit() {
this.dataSourceIncidents.paginator = this.paginator;
this.dataSourceIncidents.sort = this.sort;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceIncidents.filter = filterValue.trim().toLowerCase();

if (this.dataSourceIncidents.paginator) {
  this.dataSourceIncidents.paginator.firstPage();
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

        this.getAtLast1000Incidents();
        this.getAtLast4Incidents();
  }

  getAtLast1000Incidents(){
    this.incidentsServices.getAtLast1000Incidents().subscribe((data)=>{
        console.log(data)
        this.dataSourceIncidents.data = data
    });
  }
  
  getAtLast4Incidents(){
    this.incidentsServices.getAtLast4Incidents().subscribe((data)=>{
        console.log(data)
        this.lastAt4LastIncidents = data
    });
  }

  openDialogIncidentsDetails(tweetSelected) {
    this.dialog.open(DialogIncidentsDetailsComponent,{
        data:{
            tweetSelected : tweetSelected
        }
    });
  }

  openDialogTwitter() 
  {
    this.dialog.open(DialogTwitterComponent);
  }

}