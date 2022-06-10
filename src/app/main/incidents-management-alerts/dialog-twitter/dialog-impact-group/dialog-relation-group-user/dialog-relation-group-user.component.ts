import { Component, OnInit, ViewChild, QueryList} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

export interface UserData {
  grupo: string;
  director: string;
  nombre: string;
  apellido: string;
  correoelectronico: string;
  numeroContacto: string;
  numeroEmpleado: string;
  posicion: string;
  checkbox: string;}

  const ZONE: string[] = [
    'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
  ];
  const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];

@Component({
  selector: 'app-dialog-relation-group-user',
  templateUrl: './dialog-relation-group-user.component.html',
  styleUrls: ['./dialog-relation-group-user.component.scss']
})
export class DialogRelationGroupUserComponent implements OnInit {

  checked = false;

  //Table Group Impact
  displayedColumnsGroups: string[] = ['grupo', 'director', 'checkbox'];
  dataSourceGroups = new MatTableDataSource();

  @ViewChild(MatPaginator) paginatorGroups = new QueryList<MatPaginator>();
  @ViewChild(MatSort) sortGroups = new QueryList<MatSort>();

//Table Users
  displayedColumnsUsers: string[] = ['nombre', 'apellido', 'correoelectronico', 'numeroContacto', 'numeroEmpleado', 'posicion', 'checkbox'];
  dataSourceUsers = new MatTableDataSource();
  @ViewChild(MatPaginator) paginatorUsers = new QueryList<MatPaginator>();
  @ViewChild(MatSort) sortUsers  = new QueryList<MatSort>();

  constructor( private incidentsServices : ChIncidentsApiService, private incidentsService: ChIncidentsApiService) 
  {  }

ngAfterViewInit() {
this.dataSourceGroups.paginator = this.paginatorGroups.toArray()[0];
this.dataSourceGroups.sort = this.sortGroups.toArray()[0];

this.dataSourceUsers.paginator = this.paginatorUsers.toArray()[1];
this.dataSourceUsers.sort = this.sortUsers.toArray()[1];
}

applyFilterGroups(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceGroups.filter = filterValue.trim().toLowerCase();

if (this.dataSourceGroups.paginator) {
  this.dataSourceGroups.paginator.firstPage();
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
     this.getIncidentsUserDetails()
    this.getIncidentsGroups();
  }

  getIncidentsUserDetails(){
    this.incidentsServices.getUserDetails().subscribe((data)=>{
        console.log(data)
        this.dataSourceUsers.data = data; 
    });
  }

  getIncidentsGroups(){
    this.incidentsService.getImpactGroups().subscribe((data)=>{
        console.log(data)
        this.dataSourceGroups.data = data;
    });
  }
}
