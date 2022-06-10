import { Component, OnInit } from '@angular/core';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

@Component({
  selector: 'app-dialog-risk-level',
  templateUrl: './dialog-risk-level.component.html',
  styleUrls: ['./dialog-risk-level.component.scss']
})
export class DialogRiskLevelComponent implements OnInit {

  riskTypes;  

  constructor(private chIncidentsApi: ChIncidentsApiService) { }

  ngOnInit(): void {
      this.getAllRiskType();
  }

  getAllRiskType(){
    this.chIncidentsApi.getAllRiskTypes().subscribe((data)=>{
        console.log(data);
        this.riskTypes = data;
        });
  }

}
