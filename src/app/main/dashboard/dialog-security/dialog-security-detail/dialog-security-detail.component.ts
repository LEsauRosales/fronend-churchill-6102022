import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface UserData {
  economico: string;
  ticket: string;
}

const VELOCIDAD: string[] = [
  'Roberto García', '9089', 
 ];
 const NAMES: string[] = [
   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
 ];


@Component({
  selector: 'app-dialog-security-detail',
  templateUrl: './dialog-security-detail.component.html',
  styleUrls: ['./dialog-security-detail.component.scss']
})

export class DialogSecurityDetailComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ticket','economico'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   
   function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      economico: Math.round(Math.random() * 100).toString(),
      ticket: VELOCIDAD[Math.round(Math.random() * (VELOCIDAD.length - 1))],
      
    };
   }}

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  lat = 23.8519757;
  lng = -103.017743;
  zoom = 6;

  ngOnInit(): void {
  }

}
