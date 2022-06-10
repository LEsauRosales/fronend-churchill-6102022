import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormIncidentComponent } from './form-incident/form-incident.component';
import Swal from 'sweetalert2'
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

export interface UserData {
  role_job: string;
  business_division: string;
  event_type: string;
  protocol: string;
  incide_origin: string;
  incidence_ubication: string;
  cause_incidence: string;
  description: string;
  contact_number: string;
  incidence_tracing: string;
  incidence_solution: string;
  validate_solution: string;
  Created_at: string;
  incident_hour: string;
}
  // id: string;
  // modulo: string;
  // evento: string;
  // fechaRecepcion: string;
  // fechaCaptura: string;
  // causa: string;
  // nivelRiesgo: string;
  // grupoImpacto: string;
  // protocoloAccion: string;
  // status: string;
  // personalAsociado: string;
  // solucion: string;
  // fechaAtencion: string;
  // ubicacion: string;

// }

const ZONE: string[] = [
  'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-infohub',
  templateUrl: './infohub.component.html',
  styleUrls: ['./infohub.component.scss']
})
export class InfohubComponent implements OnInit {

  displayedColumns: string[] = ['reported_name', 'role_job', 'business_division', 'event_type', 'protocol', 'incide_origin', 'incidence_ubication', 'description', 'contact_number', 'incidence_tracing', 'incidence_solution', 'validate_solution', 'Created_at', 'incident_hour'];
  
  dataSourceInfoHub = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  
  constructor (public dialog: MatDialog, private chIncidentsApiService: ChIncidentsApiService) {
}

ngAfterViewInit() {
this.dataSourceInfoHub.paginator = this.paginator;
this.dataSourceInfoHub.sort = this.sort;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceInfoHub.filter = filterValue.trim().toLowerCase();

if (this.dataSourceInfoHub.paginator) {
  this.dataSourceInfoHub.paginator.firstPage();
}
   }

  ngOnInit(): void {

    this.getInfoHub();
    
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

  
  getInfoHub(){
    this.chIncidentsApiService.getInfoHub().subscribe((data:unknown[])=>{
        console.log(data)
        this.dataSourceInfoHub.data = data; 
    });}

  openFormIncidentReport() {
    this.dialog.open(FormIncidentComponent, {
      data: "infohub"
    });
  }

}
