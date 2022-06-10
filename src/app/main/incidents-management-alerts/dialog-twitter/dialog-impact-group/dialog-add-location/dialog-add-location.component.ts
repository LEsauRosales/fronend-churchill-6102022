import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormLocationComponent } from './dialog-form-location/dialog-form-location.component';

export interface UserData {
  locacion: string;
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
  selector: 'app-dialog-add-location',
  templateUrl: './dialog-add-location.component.html',
  styleUrls: ['./dialog-add-location.component.scss']
})
export class DialogAddLocationComponent implements OnInit {

  displayedColumns: string[] = ['locacion', 'edit', 'delete'];
  dataSourceLocation = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private incidentsService: ChIncidentsApiService) { 

    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    function createNewUser(id: number): UserData {
      const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    
      return {
        locacion: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
        edit: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
        delete: ZONE[Math.round(Math.random() * (ZONE.length - 1))],      
      };
    }
}

ngAfterViewInit() {
this.dataSourceLocation.paginator = this.paginator;
this.dataSourceLocation.sort = this.sort;
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSourceLocation.filter = filterValue.trim().toLowerCase();

if (this.dataSourceLocation.paginator) {
  this.dataSourceLocation.paginator.firstPage();
}
   }

   openDialogAddFormLocation()
   {
     this.dialog.open(DialogFormLocationComponent);
   
  }

  ngOnInit(): void {
      this.getIncidentsLocation();
  }

  getIncidentsLocation(){
    this.incidentsService.getLocations().subscribe((data)=>{
        console.log(data)
        this.dataSourceLocation.data = data;

    });
  }

}
