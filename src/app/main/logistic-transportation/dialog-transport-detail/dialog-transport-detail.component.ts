import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';

export interface PeriodicElement {
  transportista: string;
  calificacion: string;
  viaje: string;
  puntuacion:  number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { transportista: 'TUM TRANSP. UNIDOS',   calificacion:  "Bueno",  viaje: 'Uso de: Instagram. Duración: 45 min',  puntuacion:  52 ,},
  
];

@Component({
  selector: 'app-dialog-transport-detail',
  templateUrl: './dialog-transport-detail.component.html',
  styleUrls: ['./dialog-transport-detail.component.scss']
})
export class DialogTransportDetailComponent implements OnInit {

  displayedColumns: string[] = [ 'transportista',  'calificacion', 'viaje', 'puntuacion'];
  dataSource = ELEMENT_DATA;

  ///BAR CHART

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  
  public barChartLabels: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins =  [pluginDataLabels];

  public barChartData: ChartDataSets[] = [

    { data: [28, 48, 40, 19, 52, 27, 50], label: 'Linea Transportista (Puntaje)' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // BAR CHART events

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }

}


