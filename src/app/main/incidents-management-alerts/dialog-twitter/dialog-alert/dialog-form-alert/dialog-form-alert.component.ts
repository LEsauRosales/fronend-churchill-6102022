import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import Swal from 'sweetalert2'

interface RiskLevels {
   name: string;
  }

@Component({
  selector: 'app-dialog-form-alert',
  templateUrl: './dialog-form-alert.component.html',
  styleUrls: ['./dialog-form-alert.component.scss']
})
export class DialogFormAlertComponent implements OnInit {
  selectedRiskLevel: string;
  riskSelected: IncidentsDetails[];
  protocolSelected: IncidentsDetails[];  

  alertTypeRegister: IncidentsDetails = new IncidentsDetails();
  formAlertType: FormGroup;

  constructor(private chIncidentsApiService: ChIncidentsApiService,
    private fb: FormBuilder) {
        this.createForm();
     }

  ngOnInit(): void {
      this.getRiskLevel();
      this.getActionProtocol();
  }

  risks: RiskLevels[] = [
    { name: 'Aceptable' },
    { name: 'Bajo'},
    { name: 'Moderado'},
    { name: 'Alto'},
    { name: 'Muy Alto'}
  ];


  createForm(){
    this.formAlertType = this.fb.group({
        //property:  [content form default, [validatorArray sync need All] , validator async]
        alertTypeName    : ['', Validators.required],
        riskttype       : ['', Validators.required],
        actionProtocol : ['', Validators.required],
        create_at:[''],
        update_at:['']
        });
  }

  getRiskLevel(){
    this.chIncidentsApiService.getAllRiskTypes().subscribe((data)=>{
        console.log(data);
        this.riskSelected = data;
        });
  }

  getActionProtocol(){
    this.chIncidentsApiService.getAllActionProtocols().subscribe((data)=>{
        console.log(data);
        this.protocolSelected = data;
        });
  }

  createAlertType(){
      var date = new Date();
    
      this.alertTypeRegister.risk_level = this.selectedRiskLevel;
      this.alertTypeRegister.create_at = date.toString();
      this.alertTypeRegister.update_at = date.toString();
      console.log(this.alertTypeRegister);
        this.chIncidentsApiService.postNewAlertType(this.alertTypeRegister)
      .subscribe(data=>{
          console.log(data);
      });  
      
  Swal.fire({
    allowOutsideClick: false,
      icon: 'success',
      title: 'Tipo de Alerta Agregada',
      showConfirmButton: false,
      timer: 2500
    });
  }


  selectedRisk(data){
      console.log("entro aqui")
      console.log(data);
    this.selectedRiskLevel = data;
  }


 //Test select save the value selected

        modifiedText:string;
        empSelected: any = {};

        onRiskSelected(risk:IncidentsDetails){
        this.customFunction(risk);
        }

        customFunction(val:IncidentsDetails){
        this.modifiedText= "The Value" + val.name + "was selected " + val.desc;
        console.log(val)

 }

}
