import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormUserComponent } from './dialog-form-user/dialog-form-user.component';

export interface UserData {
  nombre: string;
  apellido: string;
  correoelectronico: string;
  numeroContacto: string;
  numeroEmpleado: string;
  posicion: string;
  edit: string;
  delete: string;}

  const ZONE: string[] = [
    'Anillo Periférico (Valle de México)', 'Avenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los InsurgentesAvenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
  ];
  const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'correoelectronico', 'numeroContacto', 'numeroEmpleado', 'posicion', 'edit', 'delete'];
  dataSourceUsers = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private incidentsServices : ChIncidentsApiService) { 

}

ngAfterViewInit() {
this.dataSourceUsers.paginator = this.paginator;
this.dataSourceUsers.sort = this.sort;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceUsers.filter = filterValue.trim().toLowerCase();

if (this.dataSourceUsers.paginator) {
  this.dataSourceUsers.paginator.firstPage();
}
   }

   openDialogAddFormUser()
   {
     this.dialog.open(DialogFormUserComponent);
   
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
