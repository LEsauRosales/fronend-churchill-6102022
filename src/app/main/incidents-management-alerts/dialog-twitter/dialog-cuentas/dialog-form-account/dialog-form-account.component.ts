import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TwitterAccount } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialog-form-account',
  templateUrl: './dialog-form-account.component.html',
  styleUrls: ['./dialog-form-account.component.scss']
})
export class DialogFormAccountComponent implements OnInit {
  
  twitterAccountRegister: TwitterAccount = new TwitterAccount();
  formTwitterAccount: FormGroup;
  
  updateTwitterAccount : TwitterAccount;
  
  constructor(private chIncidentsApiService: ChIncidentsApiService,
    @Inject(MAT_DIALOG_DATA) public data:TwitterAccount,
    private fb: FormBuilder) { 
        this.createForm();
    }

  ngOnInit(): void {
    console.log("data from the dialog")
    console.log(this.data);
    this.updateTwitterAccount = this.data;
  }

  createForm(){

    this.formTwitterAccount = this.fb.group({
        //property:  [content form default, [validatorArray sync need All] , validator async]
        name    : ['', Validators.required],
        account       : ['', Validators.required],
        twitter_id : ['', Validators.required],
        category : ['', Validators.required],
        create_at:[''],
        update_at:['']
        });
  }

  createTwitterAccount(){

    if(this.updateTwitterAccount == null){
        console.log("creando cuenta nueva")
        var date = new Date();
        this.twitterAccountRegister.create_at = date.toString();
        this.twitterAccountRegister.update_at = date.toString();
        console.log(this.twitterAccountRegister);
        
        this.chIncidentsApiService.postNewTwitterAccount(this.twitterAccountRegister)
        .subscribe(data=>{
            console.log(data);
        }); 
    }
    else{
        console.log("updatear una cuenta existente")
        var date = new Date();
        this.updateTwitterAccount.create_at = date.toString();
        this.updateTwitterAccount.update_at = date.toString();
        console.log(this.updateTwitterAccount);
        this.chIncidentsApiService.postNewTwitterAccount(this.updateTwitterAccount)
        .subscribe(data=>{
            console.log(data);
        }); 
    }

Swal.fire({
allowOutsideClick: false,
  icon: 'success',
  title: 'Cuenta Verificada Agregada',
  showConfirmButton: false,
  timer: 2500
})
 
}

}
