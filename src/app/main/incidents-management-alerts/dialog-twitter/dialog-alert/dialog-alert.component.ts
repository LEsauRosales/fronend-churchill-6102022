import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormAlertComponent } from './dialog-form-alert/dialog-form-alert.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';


export interface UserData {
  alerta: string;
  riesgo  :  string;
  accion  :  string;
  // create_at: string;
  update_at: string;
}

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {

  ///TABLA HISTÓRICO
displayedColumns: string[] = ['alerta', 'riesgo', 'accion', 'update_at'];
dataSourceAlerts = new MatTableDataSource();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  alertsType: IncidentsDetails[];
  constructor(private chIncidentsApiService: ChIncidentsApiService,
                public dialog: MatDialog) { }

                                  ///PAGINATOR
    ngAfterViewInit() {
      this.dataSourceAlerts.paginator = this.paginator;
      this.dataSourceAlerts.sort = this.sort;
    }
  
    ///FILTRO
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceAlerts.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSourceAlerts.paginator) {
        this.dataSourceAlerts.paginator.firstPage();
      }
    }

  ngOnInit(): void {
      this.getAllAlertsType();

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

  getAllAlertsType(){
    this.chIncidentsApiService.getAllAlertTypes().subscribe((data)=>{
        console.log(data);
        this.alertsType = data;
        this.dataSourceAlerts.data = this.alertsType
        });
  }

  deleteAlertTypes(alert){
    this.chIncidentsApiService.deleteAlertTypes(alert).subscribe((data)=>{
        console.log(data)
        this.getAllAlertsType();
      });
}
  
  openDialogFormAlert() 
  {
    this.dialog.open(DialogFormAlertComponent);
  }


}
