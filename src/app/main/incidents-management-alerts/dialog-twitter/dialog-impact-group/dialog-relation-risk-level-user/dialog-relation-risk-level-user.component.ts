import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

export interface UserData {
  nivelRiesgo: string;
  descripcion: string;
  nombre: string;
  apellido: string;
  correoelectronico: string;
  numeroContacto: string;
  numeroEmpleado: string;
  posicion: string;
 }

  export interface RiskLevel {
    level: string;
    description: string;
    checkbox: string;
    color: string;
  }

  const ELEMENT_DATA: RiskLevel[] = [
    {color: '#ffffff', level: 'Aceptable', description: 'No se requiere ninguna acción.', checkbox: '' },
    {color: '#ffffff', level: 'Bajo', description: 'Menores efectos que pueden ser fácilmente remediados. Se administra con procedimientos rutinarios', checkbox: ''},
    {color: '#ffffff', level: 'Moderado', description: 'Debe ser administrado con procedimientos normales de control.', checkbox: ''},
    {color: '#ffffff', level: 'Alto', description: 'Se requiere atención de la Alta Dirección. Planes de tratamiento requeridos, implementados y reportados a los jefes de las oficinas, direcciones, entre otros.', checkbox: ''},
    {color: '#ffffff', level: 'Muy Alto', description: 'Se requiere acción inmediata. Planes de tratamiento requeridos, implementados y reportados a la Alta Dirección.', checkbox: ''}
  ];

  const ZONE: string[] = [
    'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
  ];
  const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];

@Component({
  selector: 'app-dialog-relation-risk-level-user',
  templateUrl: './dialog-relation-risk-level-user.component.html',
  styleUrls: ['./dialog-relation-risk-level-user.component.scss']
})
export class DialogRelationRiskLevelUserComponent implements OnInit {

  displayedColumnsRiskLevel: string[] = ['level', 'description', 'checkbox'];
  dataSourceRiskLevel = ELEMENT_DATA;

//Table Risk Level
  // displayedColumnsRiskLevel: string[] = ['nivelRiesgo', 'descripcion', 'checkbox'];
  // dataSourceRiskLevel = new MatTableDataSource();

  @ViewChild(MatPaginator) paginatorRiskLevel = new QueryList<MatSort>();
  @ViewChild(MatSort) sortRiskLevel = new QueryList<MatSort>();

  //Table Users
  displayedColumnsUsers: string[] = ['nombre', 'apellido', 'correoelectronico', 'numeroContacto', 'numeroEmpleado', 'posicion', 'checkbox'];
  dataSourceUsers = new MatTableDataSource();
  @ViewChild(MatPaginator) paginatorUsers = new QueryList<MatPaginator>();
  @ViewChild(MatSort) sortUsers  = new QueryList<MatSort>();

  constructor(private incidentsServices : ChIncidentsApiService) { 
  }

ngAfterViewInit() {
  // this.dataSourceRiskLevel.paginator = this.paginatorRiskLevel.toArray()[0];
// this.dataSourceRiskLevel.sort = this.sortRiskLevel.toArray()[0];

this.dataSourceUsers.paginator = this.paginatorUsers.toArray()[1];
this.dataSourceUsers.sort = this.sortUsers.toArray()[1];
}

applyFilterRiskLevel(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
// this.dataSourceRiskLevel.filter = filterValue.trim().toLowerCase();

// if (this.dataSourceRiskLevel.paginator) {
//   this.dataSourceRiskLevel.paginator.firstPage();
}


applyFilterUser(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSourceUsers.filter = filterValue.trim().toLowerCase();
  
  if (this.dataSourceUsers.paginator) {
    this.dataSourceUsers.paginator.firstPage();
  }
    }

  ngOnInit(): void {
    this.getIncidentsUserDetails()
  }

  getIncidentsUserDetails(){
    this.incidentsServices.getUserDetails().subscribe((data)=>{
        console.log(data)
        this.dataSourceUsers.data = data; 
    });
  }

}
