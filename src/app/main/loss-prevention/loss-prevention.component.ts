import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogFreezerDetailComponent } from './dialog-freezer-detail/dialog-freezer-detail.component';
import { Label, MultiDataSet, Color, BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';

export interface UserData {
  region: string;
  agencia: string;
  idCongelador: string;
  serial: string;
  clienteResponsable: string;
  supervisorResponsable: string;
  fechaInspeccion: string;
  comentario: string;
}

const SERIAL: string[] = [
 'Ice Cream',  'Celaya',  '84', '#12858', '7 ELEVEN COAPA', 'Cristobal Moreno',  '25/02/2021',  'Se debe realizar una revisión de temperatura en 15 días' 
];

// {region: 'Ice Cream', agencia: 'Guadalajara', idCongelador: '84', serial: '#12858', clienteResponsable: '7 ELEVEN COAPA', supervisorResponsable: 'Cristobal Moreno', fechaInspeccion: '25/02/2021', comentario: 'Se debe realizar una revisión en 15 días' }

@Component({
  selector: 'app-loss-prevention',
  templateUrl: './loss-prevention.component.html',
  styleUrls: ['./loss-prevention.component.scss']
})
export class LossPreventionComponent implements OnInit, AfterViewInit  {
  
  // Doughnut Total Congeladores
  public doughnutChartLabels1: Label[] = ['Buen Estado', 'Regular', 'Averiados'];
  public doughnutChartData1: MultiDataSet = [
    [600, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartColors1: Color[] = [
    { backgroundColor: ['#37D700','#D1D75A','#FF2D01'] }]

      // Doughnut Congeladores Inspeccionados al día
  public doughnutChartLabels2: Label[] = ['Congeladores Inspeccionados', 'Congeladores No inspeccionados'];
  public doughnutChartData2: MultiDataSet = [
    [600, 220],
  ];

  public doughnutChartType2: ChartType = 'doughnut';

  public doughnutChartColors2: Color[] = [
    { backgroundColor: [ '#69B8FF', '#FF9842',] }]

  //Line
  public lineChartData: ChartDataSets[] = [
    { data: [ 0, 40, 65, 60, 75, 65], label: 'Congeladores Planeados' },
    { data: [ 0, 25, 45, 50, 60, 30], label: 'Congeladores Inspeccionados' },
  ];
  
  public lineChartLabels: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { 
      borderColor: 'rgba(63, 207, 65)',
      pointBackgroundColor: 'rgba(63, 207, 65)',
      pointBorderColor: 'rgba(63, 207, 65)',
      pointHoverBackgroundColor: 'rgba(63, 207, 65)',
      pointHoverBorderColor: 'rgba(63, 207, 65)',},
      { 
        borderColor: 'rgba(22, 179, 243 )',
        pointBackgroundColor:  'rgba(22, 179, 243 )',
        pointBorderColor: 'rgba(22, 179, 243 )',
        pointHoverBackgroundColor: 'rgba(22, 179, 243 )',
        pointHoverBorderColor: 'rgba(22, 179, 243 )',
      }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  displayedColumns: string[] = ['region', 'agencia', 'idCongelador', 'serial', 'clienteResponsable', 'supervisorResponsable', 'fechaInspeccion', 'comentario'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {  // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   
    /** Builds and returns a new User. */
function createNewUser(idCongelador: number): UserData {
  const region =
  SERIAL[Math.round(Math.random() * (SERIAL.length - 1))] +
    ' ' +
    SERIAL[Math.round(Math.random() * (SERIAL.length - 1))].charAt(0) +
    '.';

  return {
    idCongelador: idCongelador.toString(),
    region: Math.round(Math.random() * 100).toString(),
    serial: Math.round(Math.random() * 100).toString(),
    agencia: SERIAL[Math.round(Math.random() * (SERIAL.length - 1))],
    comentario: SERIAL[Math.round(Math.random() * (SERIAL.length - 1))],
    supervisorResponsable: SERIAL[Math.round(Math.random() * (SERIAL.length - 1))],
    fechaInspeccion: SERIAL[Math.round(Math.random() * (SERIAL.length - 1))],
    clienteResponsable: SERIAL[Math.round(Math.random() * (SERIAL.length - 1))],
    
  };
}}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  ///FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  openDialogFreezerDetail() {
    this.dialog.open(DialogFreezerDetailComponent);
  }

}
