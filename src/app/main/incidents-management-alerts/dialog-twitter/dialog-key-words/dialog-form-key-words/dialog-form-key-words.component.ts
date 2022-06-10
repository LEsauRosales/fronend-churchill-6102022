import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import Swal from 'sweetalert2'

interface Alerta {
  value: string;
  viewValue: string;
}

interface Nivel {
  value: string;
  viewValue: string;
}

interface Action {
  value: string;
  viewValue: string;
}

interface key_word {
  value: string;
  viewValue: string;
}

interface Protocolo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-form-key-words',
  templateUrl: './dialog-form-key-words.component.html',
  styleUrls: ['./dialog-form-key-words.component.scss']
})
export class DialogFormKeyWordsComponent implements OnInit {
   
  protocolo: Protocolo[] = [
    {value: 'steak-0', viewValue: 'Lista de protocolos'},
    
  ];

  nivel: Nivel[] = [
    {value: 'steak-0', viewValue: 'Alto'},
    {value: 'pizza-1', viewValue: 'Bajo'},
    {value: 'tacos-2', viewValue: 'Moderado'},
  ];

  keyWordRegister: IncidentsDetails = new IncidentsDetails();
  formKeyWord: FormGroup;
  alertsTypes: IncidentsDetails[];
  selectedAlert: IncidentsDetails;
  updateKeyWord : IncidentsDetails;
  
  constructor(private chIncidentsApiService: ChIncidentsApiService,
    @Inject(MAT_DIALOG_DATA) public data:IncidentsDetails,
    private fb: FormBuilder)   { 
        this.createForm();
    }

  ngOnInit(): void {

    this.getAlertsTypes();
    console.log("data from dialog");
    console.log(this.data);
    this.updateKeyWord = this.data;
  }

  createForm(){
    this.formKeyWord = this.fb.group({
        //property:  [content form default, [validatorArray sync need All] , validator async]
        
        key_word    : ['', Validators.required],
        alerts       : ['', Validators.required],
        alertsDetails       : ['', Validators.required],
        create_at:[''],
        update_at:['']
        });
  }

  getAlertsTypes(){
    this.chIncidentsApiService.getAllAlertTypes().subscribe((data)=>{
        console.log(data);
        this.alertsTypes = data;
        });
  }

  selectAlert(data){
      console.log("selected alert");
      console.log(data);
      this.selectedAlert = data
  }

  createKeyWord(){

    if(this.updateKeyWord == null){
      console.log("creando palabra clave nueva")
    var date = new Date();
    this.keyWordRegister.create_at = date.toString();
    this.keyWordRegister.update_at = date.toString();
    console.log(this.keyWordRegister);


    if(this.selectedAlert != undefined ){

      this.keyWordRegister.alerts = this.selectedAlert.id;
      this.chIncidentsApiService.postNewKeyWord(this.keyWordRegister)
      .subscribe(data=>{
          console.log(data);
      }); 

      

    }else{
      alert("Por favor seleccione tipo de alerta");
      
    }

  
    Swal.fire({
      allowOutsideClick: false,
        icon: 'success',
        title: 'Palabra Clave Agregada',
        showConfirmButton: false,
        timer: 2500
      });

      this.chIncidentsApiService.postNewKeyWord(this.keyWordRegister)
    .subscribe(data=>{
        console.log(data);
    });    

    

  }

  else{
    console.log("actualizar una palabra clave existente")
    this.updateKeyWordFunction(this.updateKeyWord.key_word)    
}

  }


 updateKeyWordFunction(updateKey){

  if(updateKey){

    var date = new Date();
    //  this.updateKeyWord.key_word = this.keyWordRegister.key_word;
      this.updateKeyWord.create_at = date.toString();
      this.updateKeyWord.update_at = date.toString();  
      if(this.selectedAlert != undefined ){
        this.updateKeyWord.alerts = this.selectedAlert.id;
        this.chIncidentsApiService.postNewKeyWord(this.updateKeyWord)
        .subscribe(data=>{
            console.log(data);
        }); 
      }else{
        alert("Por favor seleccione tipo de alerta");
        
      }
  }
  
  
  
  else{
    var date = new Date();
      this.updateKeyWord.key_word = this.keyWordRegister.key_word;
      this.updateKeyWord.create_at = date.toString();
      this.updateKeyWord.update_at = date.toString();  
      if(this.selectedAlert != undefined ){
        this.updateKeyWord.alerts = this.selectedAlert.id;
        this.chIncidentsApiService.postNewKeyWord(this.updateKeyWord)
        .subscribe(data=>{
            console.log(data);
        }); 
      }else{
        alert("Por favor seleccione tipo de alerta");
        
      }
  }



 }

}