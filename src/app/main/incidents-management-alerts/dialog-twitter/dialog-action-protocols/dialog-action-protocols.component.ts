import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormActionProtocolsComponent } from './dialog-form-action/dialog-form-action.component';

@Component({
  selector: 'app-dialog-action-protocols',
  templateUrl: './dialog-action-protocols.component.html',
  styleUrls: ['./dialog-action-protocols.component.scss']
})
export class DialogActionProtocolsComponent implements OnInit {

  actionProtocols;
  
  constructor(private chIncidentsApi: ChIncidentsApiService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
      this.getAllActionProtocols();
  }

  getAllActionProtocols(){
    this.chIncidentsApi.getAllActionProtocols().subscribe((data)=>{
        console.log(data);
        this.actionProtocols = data;
        });
  }


  openDialogFormActionProtocols() 
  {
    this.dialog.open(DialogFormActionProtocolsComponent);
  }

}
