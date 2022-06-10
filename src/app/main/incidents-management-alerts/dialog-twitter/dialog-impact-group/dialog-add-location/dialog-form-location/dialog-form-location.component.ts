import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentsLocations, IncidentsNewLocations } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-form-location',
  templateUrl: './dialog-form-location.component.html',
  styleUrls: ['./dialog-form-location.component.scss']
})
export class DialogFormLocationComponent implements OnInit {

  locationIncidentsRegister: IncidentsNewLocations = new IncidentsNewLocations();
  formLocationRegister: FormGroup

  constructor(private fb: FormBuilder,
    private incidentsService: ChIncidentsApiService) { 
      this.createForm();
    }

    createForm() {
      this.formLocationRegister = this.fb.group({
        location    : ['', Validators.required],
        // create_at:[''],
        // update_at:['']
      });
    }

  ngOnInit(): void {
  }

  createrNewLocation(){
  this.incidentsService.postNewIncidentsLocation(this.locationIncidentsRegister)
  .subscribe(data=>{
    console.log(data)
  });

 Swal.fire({
  allowOutsideClick: false,
    icon: 'success',
    title: 'Locación Agregada',
    showConfirmButton: false,
    timer: 2500
  })

    console.log("creando locación nueva")
    console.log(this.formLocationRegister)
   }

}
