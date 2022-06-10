import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IncidentsGroups, IncidentsNewGroup } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// interface Grupo {
//   value: string;
//   viewValue: string;
// }


// interface Director {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-dialog-form-group',
  templateUrl: './dialog-form-group.component.html',
  styleUrls: ['./dialog-form-group.component.scss']
})
export class DialogFormGroupComponent implements OnInit {

  groupIncidentsRegister: IncidentsNewGroup = new IncidentsNewGroup();
  formGroupRegister: FormGroup

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  // matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder,
    private incidentsService: ChIncidentsApiService) { this.createForm();}

    createForm() {
      this.formGroupRegister = this.fb.group({
        group    : ['', Validators.required],
        director       : ['', Validators.required],
        email       : ['', Validators.required],
        // create_at:[''],
        // update_at:['']
      });
    }

  ngOnInit(): void {
  }
  
  createrNewGroup(){
    this.incidentsService.postNewIncidentsImpactGroup(this.groupIncidentsRegister)
    .subscribe(data=>{
      console.log(data)
    });
  
   Swal.fire({
    allowOutsideClick: false,
      icon: 'success',
      title: 'Grupo de Impacto Agregado',
      showConfirmButton: false,
      timer: 2500
    })
  
      console.log("creando locación nueva")
      console.log(this.formGroupRegister)
     }

}
