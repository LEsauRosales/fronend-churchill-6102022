import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IncidentsGen, IncidentsUsersDetails } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

export interface UserData {
  nombre: string;
  posicion: string;
  ubicacion: string;
  numeroEmpleado: string;
}

const ZONE: string[] = [
  'Amelia Cruz', 'Avenida de los Insurgentes', 'Coordinador', '1258'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-incidents-details',
  templateUrl: './dialog-incidents-details.component.html',
  styleUrls: ['./dialog-incidents-details.component.scss']
})
export class DialogIncidentsDetailsComponent implements OnInit {

    //relation user locations
    relationUserLocation

  displayedColumns: string[] = ['numeroEmpleado', 'nombre',  'posicion', 'ubicacion'];
  dataSourceUserLocation = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    zoom: number;

  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any,
              private incidentServices : ChIncidentsApiService) {

    this.lat = 18.839367;
    this.lng = -97.140289;
    this.zoom = 16;
   }

   ngAfterViewInit() {
    this.dataSourceUserLocation.paginator = this.paginator;
    this.dataSourceUserLocation.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUserLocation.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceUserLocation.paginator) {
      this.dataSourceUserLocation.paginator.firstPage();
    }
  }

  lat: number;
  lng: number;

  ngOnInit(): void {
      this.getUserFromLocation(this.data.tweetSelected.location);
    //  console.log(this.data.row.location)
  }

  getUserFromLocation(location){

    console.log(location);
    const object = { "location":location}
    this.incidentServices.postRelationUsersLocationWithLocation(object).subscribe((data:IncidentsUsersDetails[])=>{
        console.log(data)
        this.relationUserLocation = data;
        this.dataSourceUserLocation.data = data
        console.log(this.dataSourceUserLocation.data)
        });
  }
  

}