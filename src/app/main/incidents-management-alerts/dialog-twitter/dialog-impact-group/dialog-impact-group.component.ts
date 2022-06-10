import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddGroupComponent } from './dialog-add-group/dialog-add-group.component';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { DialogAddLocationComponent } from './dialog-add-location/dialog-add-location.component';
import { DialogRelationGroupUserComponent } from './dialog-relation-group-user/dialog-relation-group-user.component';
import { DialogRelationLocationUserComponent } from './dialog-relation-location-user/dialog-relation-location-user.component';
import { DialogRelationRiskLevelUserComponent } from './dialog-relation-risk-level-user/dialog-relation-risk-level-user.component';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';

export interface UserData {
  locacion: string;
  grupo: string;
  nombre: string;
  apellido: string;
  NumeroDeEmpleado : string;
  CorreoElectronico : string;
  NumeroDeContacto : string;
  Posicion: string;
}

const ZONE: string[] = [
  'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-impact-group',
  templateUrl: './dialog-impact-group.component.html',
  styleUrls: ['./dialog-impact-group.component.scss']
})
export class DialogImpactGroupComponent implements OnInit {

  displayedColumns: string[] = ['locacion', 'grupo', 'nombre', 'apellido', 'NumeroDeEmpleado ', 'CorreoElectronico ', 'NumeroDeContacto ', 'Posicion'];
  dataSourceUsersCalibration = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private incidentsServices : ChIncidentsApiService) {
  }

ngAfterViewInit() {
this.dataSourceUsersCalibration.paginator = this.paginator;
this.dataSourceUsersCalibration.sort = this.sort;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceUsersCalibration.filter = filterValue.trim().toLowerCase();

if (this.dataSourceUsersCalibration.paginator) {
  this.dataSourceUsersCalibration.paginator.firstPage();
}
}

ngOnInit(): void {
  this.getUserCalibrationPrincipalTable()
}

getUserCalibrationPrincipalTable(){
  this.incidentsServices.getUserCalibrationPrincipalTable().subscribe((data:unknown[])=>{
      console.log(data)
      this.dataSourceUsersCalibration.data = data; 
  });
}

  openDialogAddGroup()
  {
    this.dialog.open(DialogAddGroupComponent);
  }

  openDialogAddUser()
  {
    this.dialog.open(DialogAddUserComponent);
  }

  openDialogAddLocation()
  {
    this.dialog.open(DialogAddLocationComponent);
  }

  openDialogAddRelationGroupUser()
  {
    this.dialog.open(DialogRelationGroupUserComponent);
  }

  openDialogAddRelationLocationUser()
  {
    this.dialog.open(DialogRelationLocationUserComponent);
  }

  openDialogAddRelationNivelRiesgoUser()
  {
    this.dialog.open(DialogRelationRiskLevelUserComponent);
  }

}
