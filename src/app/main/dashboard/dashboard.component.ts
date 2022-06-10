import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogisticComponent } from './dialog-logistic/dialog-logistic.component';
import { DialogVehicleTrackingComponent } from './dialog-vehicle-tracking/dialog-vehicle-tracking.component';
import { DialogIncidentsComponent } from './dialog-incidents/dialog-incidents.component';

import { DialogEmergencyEmployeeComponent } from './dialog-emergency-employee/dialog-emergency-employee.component';
import { DialogSecurityComponent } from './dialog-security/dialog-security.component';
import { DialogCctvComponent } from './dialog-cctv/dialog-cctv.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  openDialogCctv() {
    this.dialog.open(DialogCctvComponent);
  }

  openDialogLogistic() {
    this.dialog.open(DialogLogisticComponent);
  }
  openDialogIncidents () {
    this.dialog.open(DialogIncidentsComponent);
  }
  openDialogVehicleTracking () {
    this.dialog.open(DialogVehicleTrackingComponent);
  }
  openDialogEmergencyEmployee () {
    this.dialog.open(DialogEmergencyEmployeeComponent);
  }


  openDialogSecurity  () {
    this.dialog.open(DialogSecurityComponent);
  }
}
