import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-vehicle-tracking-add-geo-confirm',
  templateUrl: './dialog-vehicle-tracking-add-geo-confirm.component.html',
  styleUrls: ['./dialog-vehicle-tracking-add-geo-confirm.component.scss']
})
export class DialogVehicleTrackingAddGeoConfirmComponent implements OnInit {
 
    constructor(
        public dialogo: MatDialogRef<DialogVehicleTrackingAddGeoConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public mensaje: string) { }
    
        cerrarDialogo(): void {
          this.dialogo.close(false);
        }
        confirmado(): void {
          this.dialogo.close(true);
        }
    
      ngOnInit() {
      }
   

}
