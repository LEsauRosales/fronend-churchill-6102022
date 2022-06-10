import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormGroupComponent } from './dialog-form-group/dialog-form-group.component';

export interface UserData {
  impact_group: string;
  director: string;
  edit: string;
  delete: string;}

  const ZONE: string[] = [
    'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
  ];
  const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];
  
@Component({
  selector: 'app-dialog-add-group',
  templateUrl: './dialog-add-group.component.html',
  styleUrls: ['./dialog-add-group.component.scss']
})
export class DialogAddGroupComponent implements OnInit {

  displayedColumns: string[] = ['impact_group', 'director', 'edit', 'delete'];
  dataSourceGroups = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private incidentsService: ChIncidentsApiService) {

    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSourceGroups = new MatTableDataSource(users);

    function createNewUser(id: number): UserData {
      const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    
      return {
        impact_group: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
        director: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
        edit: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
        delete: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      };
    }
}

ngAfterViewInit() {
this.dataSourceGroups.paginator = this.paginator;
this.dataSourceGroups.sort = this.sort;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceGroups.filter = filterValue.trim().toLowerCase();

if (this.dataSourceGroups.paginator) {
  this.dataSourceGroups.paginator.firstPage();
}
   }

   openDialogAddFormGroup()
   {
     this.dialog.open(DialogFormGroupComponent);
   }

  ngOnInit(): void {
      this.getIncidentsGroups();
  }

  getIncidentsGroups(){
    this.incidentsService.getImpactGroups().subscribe((data)=>{
        console.log(data)
        this.dataSourceGroups.data = data;
    });
  }

}
