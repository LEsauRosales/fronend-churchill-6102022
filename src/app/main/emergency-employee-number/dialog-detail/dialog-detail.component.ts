import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentsEmergencyEmployeeNumber } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent implements OnInit {

  EmergencyEmployeeNumberRegister: IncidentsEmergencyEmployeeNumber = new IncidentsEmergencyEmployeeNumber();
  formEmergencyEmployeeNumberRegister: FormGroup

  constructor(private fb: FormBuilder,
    private incidentsService: ChIncidentsApiService) { 
      this.createForm();
    }

    createForm() {
      this.formEmergencyEmployeeNumberRegister = this.fb.group({
        incident_type    : ['', Validators.required],
        incident_origin    : ['', Validators.required],
        personal    : ['', Validators.required],
        incident_ubication    : ['', Validators.required],
        protocolo    : ['', Validators.required],
        incident_cause    : ['', Validators.required],
        incident_solution    : ['', Validators.required],
        // create_at:[''],
        // update_at:['']
      });
    }

  ngOnInit(): void {
  }

  createrNewIncidentsReportRegister(){
    //   this.incidentsService.postNewIncidentsLocation(this.IncidentsReportRegister)
    //   .subscribe(data=>{
    //     console.log(data)
    //   });
    
    //  Swal.fire({
    //   allowOutsideClick: false,
    //     icon: 'success',
    //     title: 'Locación Agregada',
    //     showConfirmButton: false,
    //     timer: 2500
    //   })
    
        console.log("creando reporte de incidente nuevo")
        console.log(this.formEmergencyEmployeeNumberRegister)
       }

}
