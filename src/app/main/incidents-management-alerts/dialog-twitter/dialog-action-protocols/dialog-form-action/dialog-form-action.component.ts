import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

@Component({
  selector: 'app-dialog-form-action-protocols',
  templateUrl: './dialog-form-action.component.html',
  styleUrls: ['./dialog-form-action.component.scss']
})
export class DialogFormActionProtocolsComponent implements OnInit {

  actionProtocolRegister: IncidentsDetails = new IncidentsDetails();
  formActionProtocol: FormGroup;

  constructor(private chIncidentsApiService: ChIncidentsApiService,
              private fb: FormBuilder) {
                  this.createForm();
               }

  ngOnInit(): void {
  }

  createForm(){
    this.formActionProtocol = this.fb.group({
        //property:  [content form default, [validatorArray sync need All] , validator async]
        protocolName      : ['', Validators.required],
        protocolDesc      : ['', Validators.required],
        create_at:[''],
        update_at:['']
        });
  }

  createActionProtocol(){
    var date = new Date();
    
      console.log(this.actionProtocolRegister);
      this.actionProtocolRegister.create_at = date.toString();
      this.actionProtocolRegister.update_at = date.toString();
       this.chIncidentsApiService.postNewActionProtocol(this.actionProtocolRegister)
      .subscribe(data=>{
          console.log(data);
      }); 
  }

}
