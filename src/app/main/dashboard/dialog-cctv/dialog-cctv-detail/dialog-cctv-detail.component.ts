import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogActivateProtocolComponent } from './dialog-activate-protocol/dialog-activate-protocol.component';

export interface UserData {
  camara: string;
  perimetro: string;
  ip: string;
  videoAnalitico: string;
}

const ZONE: string[] = [
  '', '', '', '', ''
];

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-cctv-detail',
  templateUrl: './dialog-cctv-detail.component.html',
  styleUrls: ['./dialog-cctv-detail.component.scss']
})
export class DialogCctvDetailComponent implements OnInit {

  displayedColumns: string[] = ['camara', 'perimetro', 'ip', 'videoAnalitico' ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  this.dataSource = new MatTableDataSource(users);
 
 function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    camara: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
    perimetro: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
    ip: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
    videoAnalitico: ZONE[Math.round(Math.random() * (ZONE.length - 1))]
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

 openDialogActivateProtocol() {
  this.dialog.open(DialogActivateProtocolComponent);
}

  ngOnInit(): void {
  }

}
