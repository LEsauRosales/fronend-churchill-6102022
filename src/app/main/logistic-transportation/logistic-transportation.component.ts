import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import * as pluginDataLabels from 'chart.js';
import { MatPaginator } from '@angular/material/paginator';
import { DialogDriverDetailComponent } from './dialog-driver-detail/dialog-driver-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogVehicleTrackingDetailsComponent } from '../vehicle-tracking-system/dialog-vehicle-tracking-details/dialog-vehicle-tracking-details.component';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { DialogVehicleTrackingAddGeofencingComponent } from '../vehicle-tracking-system/dialog-vehicle-tracking-add-geofencing/dialog-vehicle-tracking-add-geofencing.component';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import { DialogTransportDetailComponent } from './dialog-transport-detail/dialog-transport-detail.component';
import { DialogAddDTComponent } from './dialog-add-dt/dialog-add-dt.component';
import { DialogHistoricDTComponent } from './dialog-historic-dt/dialog-historic-dt.component';
import { DialogAuthorizedStopsComponent } from './dialog-authorized-stops/dialog-authorized-stops.component';
import { DialogDangerZoneComponent } from './dialog-danger-zone/dialog-danger-zone.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogRouteTrackingComponent } from './dialog-route-tracking/dialog-route-tracking.component';
import { interval, Subscription } from 'rxjs';
import { LogisticTravelDetails } from 'app/interfaces/logistic-travel-details';
import { TransportLine } from 'app/interfaces/socring-sipa-details';
import Swal from 'sweetalert2';

export interface UserData {
  transportista: string;
  puntaje: string;
  calificacion: string;
  duracion: string;
  conductor: string;
  identificativo: string;
  gps: string;
  incidencia: string;
  dt: string;
}

@Component({
  selector: 'app-logistic-transportation',
  templateUrl: './logistic-transportation.component.html',
  styleUrls: ['./logistic-transportation.component.scss'],
  animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class LogisticTransportationComponent implements OnInit {

    //Generate information for the grahp scorig transport line

    travelDetailSelectedData = [];
    travelDetailSelectedLabels = [];

    transportLineScoringData = [];
    transportLineScoringLabels = [];

  ///DATEPICKER
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

///TABLA HISTÓRICO
displayedColumnsScoringHistoricDrive: string[] = ['transportista', 'conductor', 'identificativo', 'puntaje', 'calificacion', 'duracion',   'gps', 'fecha'];
dataSourceScoringHistoricDrive = new MatTableDataSource();

@ViewChildren(MatPaginator) paginatorHistoricScoringDrive = new QueryList<MatPaginator>();
@ViewChildren(MatSort) sortHistoricScoringDrive = new QueryList<MatSort>();

///TABLA INCIDENTES
displayedColumnsTopIncidents: string[] = ['transportista', 'conductor', 'incidencia', 'dt'];
dataSourceTopIncidents = new MatTableDataSource();
@ViewChildren(MatPaginator) paginatorTopIncidents = new QueryList<MatPaginator>();
@ViewChildren(MatSort) sortTopIncidents = new QueryList<MatSort>();


  lat = 23.8519757;
  lng = -103.0177432;
  zoom = 6;
  
    single: any[];
    view: any[] = [1200, 350];
  
     // options
     showLegend = true;
     showLabels = true;
  
     colorScheme = {
      domain: ['#5AA454']
    };
  
    //mapping variables location ILSP
  logisticSipaScoring : TransportLine[];
  logisticTravelDetails: LogisticTravelDetails[];
  constructor(public dialog: MatDialog,
    public dialogTrackingDetails: MatDialog,
              public dialogAddGeofencing: MatDialog,
              private chFleetApiService: ChFleetApiService  ) { 
                
              }

              ngAfterViewInit() {
                this.dataSourceScoringHistoricDrive.paginator = this.paginatorHistoricScoringDrive.toArray()[0];
                this.dataSourceScoringHistoricDrive.sort = this.sortHistoricScoringDrive.toArray()[0];

                this.dataSourceTopIncidents.paginator = this.paginatorTopIncidents.toArray()[1];
                this.dataSourceTopIncidents.sort = this.sortTopIncidents.toArray()[1];
              }
            
              applyFilterDriverHistoricScoring(event: Event) {
                const filterValue = (event.target as HTMLInputElement).value;
                this.dataSourceScoringHistoricDrive.filter = filterValue.trim().toLowerCase();
            
                if (this.dataSourceScoringHistoricDrive.paginator) {
                  this.dataSourceScoringHistoricDrive.paginator.firstPage();
                }
              }

              applyFilterTopIncidents(event: Event) {
                const filterValue = (event.target as HTMLInputElement).value;
                this.dataSourceTopIncidents.filter = filterValue.trim().toLowerCase();
            
                if (this.dataSourceTopIncidents.paginator) {
                  this.dataSourceTopIncidents.paginator.firstPage();
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
        
        this.getHistoricDriveScoring();
        this.getLastLogisticLocations();
        this.getHistoricTransportLineScoring();
        this.getTopIncidents();

      }

      getTopIncidents(){
        this.chFleetApiService.getTopIncidentsIlsp().subscribe((data)=>{
            console.log(data)
            this.dataSourceTopIncidents.data = data;

        });
 
        const intervalFRC = interval(120000);
        intervalFRC.subscribe(()=>{
            this.chFleetApiService.getTopIncidentsIlsp().subscribe((data)=>{
                console.log(data)
                this.dataSourceTopIncidents.data = data;
  
            });
       });  
          
      }

    
      getHistoricTransportLineScoring(){

        this.chFleetApiService.getAllTransportLineScoringMean().subscribe((data)=>{
            console.log(data);
            data.forEach(element=>{
                this.transportLineScoringData.push(parseInt(element.scoringMean))
                this.transportLineScoringLabels.push(element.transportLine);

            })
            console.log(this.transportLineScoringData);
            console.log(this.transportLineScoringLabels); 
        })
      }

      //Last Logistic Location
           //Get historic drive scoring
           getLastLogisticLocations(){

            this.chFleetApiService.getLastAllLocationIlsp().subscribe((data)=>{
                this.logisticTravelDetails = data;
                console.log(this.logisticTravelDetails);
                });

      /*         const intervalFRC = interval(120000);
             intervalFRC.subscribe(()=>{
                this.chFleetApiService.getLastAllLocationIlsp().subscribe((data)=>{
                    this.logisticTravelDetails = data;
                    console.log(this.logisticTravelDetails);
                    });
            });  */ 
      /*        this.chFleetApiService.getLastAllLocationIlsp().subscribe((data)=>{
                this.logisticTravelDetails = data;
                console.log(this.logisticTravelDetails)
            })  */
          }

      //Get historic drive scoring
      getHistoricDriveScoring(){
        this.chFleetApiService.getAllDriverScoring().subscribe((data)=>{
            this.dataSourceScoringHistoricDrive.data = data;
          //  console.log(data);
          //  console.log( this.dataSourceScoringHistoricDrive.data);
            });
      }
/// BAR CHART events

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

  /// LINE CHARTS

  public lineChartData: ChartDataSets[] = [
    { data: [40, 48, 40, 69, 125, 67, 80, 58, 48, 130, 70, 86, 50, 110, 98, 65, 84, 100, 110], label: 'Velocidad (km/h)' },
  ];

  public lineChartLabels: Label[] = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm','11:00 pm', '12:00 am'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],

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
    { // grey
      backgroundColor: 'rgba(148,159,177,0.5)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },

  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }

///ADD GEOFENCING

openTrackingDetails(assetId, provider) {
        console.log("entro en la function dialog" + assetId);
        console.log("entro en la function dialog" + provider);
        const dialogRefTrackingDetails = this.dialogTrackingDetails.open(DialogVehicleTrackingDetailsComponent, {data:{assetId: assetId, provider: provider}});
      }

      openAddGeofencing(provider){
        console.log("add geofencing with" + provider);
        const dialogRefAddGeofencing = this.dialogAddGeofencing.open(DialogVehicleTrackingAddGeofencingComponent, {data:{provider: provider}});
      }
    

  /// DIALOGS
  openDialogDriverDetail() {
    this.dialog.open(DialogDriverDetailComponent);
  }

  openDialogTransportDetail(){
  this.dialog.open(DialogTransportDetailComponent);
}

openDialogaddDT(){
this.dialog.open(DialogAddDTComponent);}

openDialoghistoricDT(){
  this.dialog.open(DialogHistoricDTComponent);}
  
openDilaogAuthorizedStops(){
  this.dialog.open(DialogAuthorizedStopsComponent);}
  
  openDialogRouteTracking(){
  this.dialog.open(DialogRouteTrackingComponent);}

openDialogDangerZone(){
  this.dialog.open(DialogDangerZoneComponent);}

  travelDetails(row){

  //  this.travelDetailSelectedData = [];
  //  this.travelDetailSelectedLabels = [];

      console.log(row);

      this.chFleetApiService.getTravelDetailByDt(row.travel_dt_id).subscribe((data)=>{
        console.log(data);
        data.forEach(element=>{

           
            if(parseInt(element.speed) > 80){
                this.travelDetailSelectedData.push(parseInt(element.speed));
                this.travelDetailSelectedLabels.push(element.created_at); 
            }
           
        })
        });

        console.log( this.travelDetailSelectedLabels);
        console.log( this.travelDetailSelectedData);
  }

  
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
    },
  };

  public barChartLabels: Label[] = this.transportLineScoringLabels;
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [

    { data: this.transportLineScoringData, label: 'Linea Transportista Scoring SIPA' }
  ];
}






