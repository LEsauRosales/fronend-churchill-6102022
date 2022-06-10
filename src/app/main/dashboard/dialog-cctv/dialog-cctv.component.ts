import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogCctvDetailComponent } from './dialog-cctv-detail/dialog-cctv-detail.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

export interface UserData {
  videoAnalitico: string;
  planta: string;
  camera: string;
  perimetro: string;
  protocol: string;
  fechaRecibido: string;
  fechaResolucion: string;
  ip: string;
  detalle: string;
  nivelRiesgo: string;

}

const ZONE: string[] = [
  'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-cctv',
  templateUrl: './dialog-cctv.component.html',
  styleUrls: ['./dialog-cctv.component.scss']
})
export class DialogCctvComponent implements OnInit {

  displayedColumns: string[] = ['videoAnalitico', 'planta', 'camera', 'ip', 'perimetro', 'nivelRiesgo', 'protocol', 'fechaRecibido', 'fechaResolucion'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   
   function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
    return {
      videoAnalitico: Math.round(Math.random() * 100).toString(),
      planta: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      camera: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      perimetro: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      protocol: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      ip: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      fechaRecibido: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      fechaResolucion: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      nivelRiesgo: ZONE[Math.round(Math.random() * (ZONE.length - 1))],
      detalle: ZONE[Math.round(Math.random() * (ZONE.length - 1))]
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

  ngOnInit(): void {
    let timerInterval
    Swal.fire({
      titleText: 'Cargando datos',
      html: '<b>Por favor espere . . . .</b>',
      timer: 2000,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  openDialogCctvDetail() {
    this.dialog.open(DialogCctvDetailComponent);
  }

}
