import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

export interface UserData {
  locacion: string;
  checkbox: string;
  nombre: string;
  apellido: string;
  correoelectronico: string;
  numeroContacto: string;
  numeroEmpleado: string;
  posicion: string;}

  const ZONE: string[] = [
    'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
  ];
  const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];

@Component({
  selector: 'app-dialog-relation-location-user',
  templateUrl: './dialog-relation-location-user.component.html',
  styleUrls: ['./dialog-relation-location-user.component.scss']
})
export class DialogRelationLocationUserComponent implements OnInit {

//Table Locations
  displayedColumnsLocation: string[] = ['locacion', 'checkbox'];
  dataSourceLocation = new MatTableDataSource();
  @ViewChild(MatPaginator) paginatorLocation = new QueryList<MatPaginator>();
  @ViewChild(MatSort) sortLocation  = new QueryList<MatSort>();

//Table Users
  displayedColumnsUsers: string[] = ['nombre', 'apellido', 'correoelectronico', 'numeroContacto', 'numeroEmpleado', 'posicion', 'checkbox'];
  dataSourceUsers = new MatTableDataSource();
  @ViewChild(MatPaginator) paginatorUsers = new QueryList<MatPaginator>();
  @ViewChild(MatSort) sortUsers  = new QueryList<MatSort>();

  constructor(private incidentsServices : ChIncidentsApiService, private incidentsService: ChIncidentsApiService) { 
  }
  
ngAfterViewInit() {
this.dataSourceLocation.paginator = this.paginatorLocation.toArray()[0];
this.dataSourceLocation.sort = this.sortLocation.toArray()[0];

this.dataSourceUsers.paginator = this.paginatorUsers.toArray()[1];
this.dataSourceUsers.sort = this.sortUsers.toArray()[1];
}


applyFilterLocation(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSourceLocation.filter = filterValue.trim().toLowerCase();
  
  if (this.dataSourceLocation.paginator) {
    this.dataSourceLocation.paginator.firstPage();
  }
    }

applyFilterUser(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
  
  if (this.dataSourceUsers.paginator) {
    this.dataSourceUsers.paginator.firstPage();
  }
    }

  ngOnInit(): void {
    this.getIncidentsUserDetails();
    this.getIncidentsLocation();
  }

  getIncidentsLocation(){
    this.incidentsService.getLocations().subscribe((data)=>{
        console.log(data)
        this.dataSourceLocation.data = data;

    });
  }

  getIncidentsUserDetails(){
    this.incidentsServices.getUserDetails().subscribe((data)=>{
        console.log(data)
        this.dataSourceUsers.data = data; 
    });
  }
}
