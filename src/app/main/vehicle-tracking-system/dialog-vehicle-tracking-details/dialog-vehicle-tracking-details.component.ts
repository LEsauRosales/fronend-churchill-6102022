import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { DatePipe } from '@angular/common'
import { VehicleDetails } from 'app/interfaces/vehicle-details';

@Component({
  selector: 'app-dialog-vehicle-tracking-details',
  templateUrl: './dialog-vehicle-tracking-details.component.html',
  styleUrls: ['./dialog-vehicle-tracking-details.component.scss']
})
export class DialogVehicleTrackingDetailsComponent implements OnInit {
  lat: number;
  lng: number;
  zoom;

  vehicleDetails: VehicleDetails[];

 /*   assetTracking = [
    {
      assetId: 'SMUN451',
      date: '1',
      lat: -35.2784167,
      lng: 149.1294692
    },
    {
      assetId: 'SMUN451',
      date: '2',
      lat: -35.280321693840129,
      lng: 149.12908274880189
    },
    {
      assetId: 'SMUN451',
      date: '3',
      lat: -35.2803415,
      lng: 149.1290788
    },
    {
      assetId: 'SMUN451',
      date: '4',
      lat: -35.280451499999991,
      lng: 149.1290784
    },
    {
      assetId: 'SMUN451',
      date: '5',
      lat: -35.2805167,
      lng: 149.1290879
    }
  ];  */

  arr = [];
  myJsonString;

  dateNow : Date = new Date();

  constructor( private chFleetApiService: ChFleetApiService,
    @Inject(MAT_DIALOG_DATA) public data,
    public datepipe: DatePipe) { 
    this.lat = 19.350608;
    this.lng = -99.266165;
    this.zoom = 6;
  }

  selectedDate;
  assetId;

  ngOnInit(): void {

    console.log("Data from the dialog");
    console.log(this.data);
    console.log(this.data.assetId);
    console.log(this.data.provider);
  
    this.assetId = this.data.assetId;
    this.dateNow=new Date();
    this.selectedDate =this.datepipe.transform(this.dateNow, 'yyyy-MM-dd');
    this.trackingRoute(this.data.assetId,this.data.provider,this.selectedDate);
   
  }

  trackingRoute(assetId:string, provider:string, selectedDate:string){
    this.chFleetApiService.getTrackingLocation(assetId,provider,selectedDate).subscribe((data)=>{
        this.vehicleDetails = data;
        console.log(data);
    })
  }

  /* trackingRouteWithDate(selectedDate:string){
    this.chFleetApiService.getTrackingLocation(this.data.assetId,this.data.provider,selectedDate).subscribe((data)=>{
        this.vehicleDetails = data;
        console.log(data);
    })
  } */

}