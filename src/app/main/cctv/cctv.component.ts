import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DialogDetailIncidentsComponent } from './dialog-detail-incidents/dialog-detail-incidents.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogIncidentsComponent } from './dialog-incidents/dialog-incidents.component';
import { CctvService } from 'app/services/cctv.service';
import { CctvSiteDetails } from 'app/interfaces/cctv-details';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

export interface UserData {
  planta: string;
  analytic: string;
  nivelRiesgo: string;
  protocol: string;
  perimetro: string;
  ip: string;
  camera: string;
  detalle: string;
  camara: string;
  videoAnalitico: string;
  fechaRecibido: string;
  fechaResolucion: string;
}


const ELEMENT_DATA: UserData[] = [
  
];

export interface Card {
  text: string;
}

const DATA: Card[] = [
  {
    text: 'Tultlitán'
  },
  {
    text: 'CDU'
  },
  {
    text: 'Lerma'
  },
  {
    text: 'Cuernavaca'
  },
  {
    text: 'Tamaulipas'
  },
  {
    text: 'Estado de México'
  },
  {
    text: 'Monterrey'
  },
  {
    text: 'Puebla'
  },
  {
    text: 'San Juan del Río'
  },
  {
    text: 'Chihuahua'
  }
];

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.scss']
})
export class CctvComponent implements OnInit, OnDestroy {

    //cctv sites details
    cctvSiteDetails: CctvSiteDetails[];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

 

///PAGINATOR TABLE

dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['planta', 'analytic', 'nivelRiesgo', 'protocol', 'perimetro', 'camera',  'ip', 'fechaRecibido', 'fechaResolucion', 'detalle'];

  displayedColumns1: string[] = ['videoAnalitico', 'planta', 'camera', 'ip', 'perimetro', 'protocol', 'fechaRecibido', 'fechaResolucion'];

///PAGINATOR CARDS

dataSourceAnalitycsEvents = new MatTableDataSource();

 
@ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor( private changeDetectorRef: ChangeDetectorRef,
               public dialog: MatDialog,
               private cctvApiService: CctvService){ }
   
  ///FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAnalitycsEvents.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAnalitycsEvents.paginator) {
      this.dataSourceAnalitycsEvents.paginator.firstPage();
    }
  }

  timerSubscription: Subscription; 
  
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
     
    this.getLast100AnalyticsEvents();
    this.getCctvSiteDetails();
    this.changeDetectorRef.detectChanges();
    this.dataSourceAnalitycsEvents.paginator = this.paginator;
  }

  getLast100AnalyticsEvents(){
            this.cctvApiService.getAtLastCCTV100Incidents().subscribe((data)=>{
                console.log(data);
                this.dataSourceAnalitycsEvents.data = data;
             })
             const intervalAlerts = interval(120000);
             intervalAlerts.subscribe(()=>{
                 this.cctvApiService.getAtLastCCTV100Incidents().subscribe((data)=>{
                console.log(data);
                this.dataSourceAnalitycsEvents.data = data;
       
                 });
            });  
    
    }

  getCctvSiteDetails(){
    this.cctvApiService.getSites().subscribe((data:CctvSiteDetails[])=>{
        console.log(data);
        this.cctvSiteDetails = data  
    })
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSourceAnalitycsEvents.disconnect(); 
    }
  }

  ///DIALOG INCIDENTS

  openDialogIncidents(site,ip) {
    this.dialog.open(DialogDetailIncidentsComponent,{
        data:{
            data:site,
            data1: ip
        }
    });
  }

  ///DIALOG INCIDENTS DETAILS

  openDialogIncidentsDetails(site) {
    this.dialog.open(DialogDetailIncidentsComponent,{
        data:{
            data:site
        }
    });
    
  }
}
