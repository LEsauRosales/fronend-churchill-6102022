import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IncidentsNewUser, IncidentsUsersDetails } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import Swal from 'sweetalert2';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-dialog-form-user',
  templateUrl: './dialog-form-user.component.html',
  styleUrls: ['./dialog-form-user.component.scss']
})

export class DialogFormUserComponent implements OnInit {

  userIncidentsRegister: IncidentsNewUser = new IncidentsNewUser();
  formUserRegister: FormGroup

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  // matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
              private incidentsService: ChIncidentsApiService) {
                this.createForm();
               }


  ngOnInit(): void {
  }

  createForm() {
    this.formUserRegister = this.fb.group({
      name    : ['', Validators.required],
      last_name       : ['', Validators.required],
      phone_number : ['', Validators.required],
      employee_number : ['', Validators.required],
     // position : ['', Validators.required],
      email : ['', Validators.required],
      // create_at:[''],
      // update_at:['']
    });
  }

 createrNewUser(){

  console.log("creando usuario nuevo")
  console.log(this.userIncidentsRegister)
  this.incidentsService.postNewIncidentsUser(this.userIncidentsRegister)
  .subscribe(data=>{
    console.log(data)
  });

 Swal.fire({
  allowOutsideClick: false,
    icon: 'success',
    title: 'Usuario Agregado',
    showConfirmButton: false,
    timer: 2500
  })

 }}
