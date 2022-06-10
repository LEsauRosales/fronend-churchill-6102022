import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,FormBuilder,  Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeofencingDetails } from 'app/interfaces/geofencing-details';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { DialogVehicleTrackingAddGeofencingComponent } from '../../vehicle-tracking-system/dialog-vehicle-tracking-add-geofencing/dialog-vehicle-tracking-add-geofencing.component';
import { DialogVehicleTrackingAddGeoConfirmComponent } from '../../vehicle-tracking-system/dialog-vehicle-tracking-add-geo-confirm/dialog-vehicle-tracking-add-geo-confirm.component';

declare const google: any;

@Component({
  selector: 'app-dialog-danger-zone',
  templateUrl: './dialog-danger-zone.component.html',
  styleUrls: ['./dialog-danger-zone.component.scss']
})
export class DialogDangerZoneComponent implements OnInit {
  formGeofencingRegister: FormGroup;
  geofencingRegister: GeofencingDetails = new GeofencingDetails();
  geofencingsDetails: GeofencingDetails[];

  //for delete
  selectedDeleteGeo;
  //filter
  searchGeoName: string = "";

  lat: number;
  lng: number;
  zoom = 16;
  
  drawerGeofencingCoords;

constructor(  private chFleetApiService: ChFleetApiService,
              public dialogConfirm: MatDialog,
              public dialogAddGeofencing: MatDialogRef<DialogVehicleTrackingAddGeofencingComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data) { 
                  this.lat = 19.350608;
                  this.lng = -99.266165;
                  this.zoom = 6;
                  this.createForm();
              }
            

ngOnInit(): void {

  //this.getAllRiskZones();
  console.log("Data from the dialog");
  console.log(this.data);
 // console.log(this.data.provider);
}

geofencingCoords = [];

getAllRiskZones(map: any){
  this.chFleetApiService.getAllRiskZone().subscribe((data)=>{
      this.geofencingsDetails = data;
      console.log(data);
      for (let key of Object.keys(this.geofencingsDetails)) {
         let coords = this.geofencingsDetails[key];
           //check for iteration over data
         console.log(coords.ilsp_mt_risk_zone_geocoords);
         coords.ilsp_mt_risk_zone_geocoords .forEach(element => {
             Object.entries(element).forEach(()=>{
             //  console.log(`${key} ${value}`);
               console.log(element.latitude); console.log(element.longitude);

               this.geofencingCoords.push(new google.maps.LatLng(element.latitude,element.longitude));
             })
         });

         const myPolygon = new google.maps.Polygon({
          paths: this.geofencingCoords,
          draggable: false, // turn off if it gets annoying
          editable: false,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });

        myPolygon.setMap(map);

        this.geofencingCoords = [];
      }
      });
}

createForm(){
  this.formGeofencingRegister = this.fb.group({
      name   : ['', Validators.required],
      type   : ['', Validators.required],
      alert  : ['', Validators.required]
      });
}


  onMapReady(map) {
  this.initDrawingManager(map);
  console.log("onMapReady");
  console.log(map);
  this.getAllRiskZones(map);
  //refresh after delete
}

initDrawingManager(map: any) {
  const options = {
    drawingControl: true,
    drawingControlOptions: {
      drawingModes: ["polygon"]
    },
    polygonOptions: {
      draggable: false,
      editable: true,
      fillColor: '#1EA448',
      fillOpacity: 0.3,
      strokeColor: '#1EA448',
      strokeOpacity: 0.6
    },
    drawingMode: google.maps.drawing.OverlayType.POLYGON
  };

  const drawingManager = new google.maps.drawing.DrawingManager(options);
 
  drawingManager.setMap(map);

  //Drawing polygon listener over map
  google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon) => {
      const len = polygon.getPath().getLength();
      const polyArrayLatLng = [];

      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = {lat: vertex.lat(), lng: vertex.lng()};
        polyArrayLatLng.push(vertexLatLng);
      }
      // the last point of polygon should be always the same as the first point (math rule)
      polyArrayLatLng.push(polyArrayLatLng[0]);
      //print the coordinates for generate de polygon
      console.log('coordinates', polyArrayLatLng);
      this.drawerGeofencingCoords = polyArrayLatLng;
       // Switch back to non-drawing mode after drawing a shape.
      drawingManager.setDrawingMode(null);

          //Clear polygon with right click over map
    google.maps.event.addListener(map, "rightclick", function(event) {
      console.log("in the right click!");
      polygon.setMap(null);
      });
   });
}

//Selected shape delete
saveGeofencingCoords(){
    // Validate de form before to save geofencing
    if(this.formGeofencingRegister.valid){
        console.log("form is valid")
    
        if(this.drawerGeofencingCoords != null ){
          console.log("geofencing form")
          console.log(this.geofencingRegister);

          // initialized array coords
           this.geofencingRegister.ilsp_mt_risk_zone_geocoords = [];

              console.log('drawers' + this.drawerGeofencingCoords);
              for (let key of Object.keys(this.drawerGeofencingCoords)) {
            
              let coords = this.drawerGeofencingCoords[key];
              // ... do something with mealName push coords in the array
              this.geofencingRegister.ilsp_mt_risk_zone_geocoords.push({latitude: coords.lat, longitude : coords.lng});
              }

              console.log(this.geofencingRegister);
              this.chFleetApiService.postNewRiskZone(this.geofencingRegister)
          .subscribe(data=>{
            console.log(data);
            
          })
              alert("Geocerca almacenada!");
              this.openDialogConfirm();

        }else{alert("Por favor, para continuar dibuje la geocerca")}
      }else{alert("Por favor, complete el formulario")}
}

selectedGeofencing(geofencing){
    console.log(geofencing)
    this.selectedDeleteGeo = geofencing;
}

map : any;
deleteGeofencingCoords(){
    this.formGeofencingRegister.reset();
    console.log(this.selectedDeleteGeo.id);
    this.chFleetApiService.deleteRiskZone(this.selectedDeleteGeo.id)
    .subscribe(data=>{
      console.log(data);
    });
    
    this.onMapReady(this.map)
    
 }

 openDialogConfirm(){
  this.dialogConfirm
  .open(DialogVehicleTrackingAddGeoConfirmComponent, {
    data: `¿Quieres continuar agregando Geocercas?`
  })
  .afterClosed()
  .subscribe((confirmado: Boolean) => {
    if (confirmado) {
      alert("Puedes continuar");
      this.drawerGeofencingCoords = null;
      this.formGeofencingRegister.reset();
    } else {
      alert("Cambios almacenados");
      this.dialogAddGeofencing.close();
    }
  });
 }
 
}