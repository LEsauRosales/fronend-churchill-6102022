import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EventSocketEntry } from 'app/interfaces/event-socket-entry';
import { SecurityAlarmsDetails } from 'app/interfaces/security-alarms-details';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { WebSocketEventsService } from 'app/services/web-socket-events.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSecurityDetailComponent } from '../dashboard/dialog-security/dialog-security-detail/dialog-security-detail.component';
import { FormIncidentComponent } from '../infohub/form-incident/form-incident.component';
import Swal from 'sweetalert2';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { InfoHub } from 'app/interfaces/panic-buttons';

export interface UserData {
  proveedor: string;
  Origen: string;
  eco: string;
  event_date: string;
  event_id: string;
  latitude: string;
  longitude: string;
  name: string;
  speed: string;
  status: string;
}

  const ZONE: string[] = [
    'Anillo Periférico (Valle de México)', 'Avenida de los Insurgentes', 'Calzada de la Viga', 'Eje Central Lázaro Cárdenas'
  ];
  const NAMES: string[] = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
  ];

@Component({
  selector: 'app-security-alarms-panic-buttons',
  templateUrl: './security-alarms-panic-buttons.component.html',
  styleUrls: ['./security-alarms-panic-buttons.component.scss']
})
  
export class SecurityAlarmsPanicButtonsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['proveedor', 'Origen', 'eco', 'event_date', 'event_id', 'latitude', 'longitude', 'name', 'speed', 'status'];
  dataSourceInfoHubPanicButtons = new MatTableDataSource();
  paginator: MatPaginator;
  sort: MatSort;

  infoHub: InfoHub [];
 
  constructor(private webSocketService: WebSocketEventsService,
              private emergencyEventsService: ChFleetApiService,
              public dialog: MatDialog, private chIncidentsApiService: ChIncidentsApiService) {
            }

            ngAfterViewInit() {
              this.dataSourceInfoHubPanicButtons.paginator = this.paginator;
              this.dataSourceInfoHubPanicButtons.sort = this.sort;
              }
              
              applyFilter(event: Event) {
              const filterValue = (event.target as HTMLInputElement).value;
              this.dataSourceInfoHubPanicButtons.filter = filterValue.trim().toLowerCase();
              
              if (this.dataSourceInfoHubPanicButtons.paginator) {
                this.dataSourceInfoHubPanicButtons.paginator.firstPage();
              }
                 }
               
  ngOnInit(): void {
    this.getInfoHubPanicButtonsMix();
    // this.getCurrentPanicButtonsMix();
  }

  getInfoHubPanicButtonsMix(){
    this.chIncidentsApiService.getInfoHubPanicButtonsMix().subscribe((data:unknown[])=>{
        console.log(data)
        this.dataSourceInfoHubPanicButtons.data = data; 
    });}

  // getCurrentPanicButtonsMix(){
  //   this.ChFleetApiService.getCurrentPanicButtonsMix().subscribe((data)=>{
  //       console.log(data);
  //       this.twitterAccounts = data;
  //       this.dataSourceTwitterAccounts.data = this.twitterAccounts
  //       console.log(this.twitterAccounts);
  //       });
  // }

    //Socket subscribe

    // this.subscribe();

    //web service emergency events

  //   this.emergencyEventsService.getEmergencyEmployeeEvents().subscribe((data: SecurityAlarmsDetails[])=>{
  //       console.log(data);
  //       this.dataSource.data = data;
  //       console.log("emergency!")
  //       this.filterSelectObj.filter((o) => {
  //           o.options = this.getFilterObject(this.securityAlarm, o.columnProp);
  //         });
  //   });

  //   this.dataSource.filterPredicate = this.createFilter();
  //   this.dataSource.paginator = this.paginator;
  // }

  // ----------------------------------------
  

  // subscribe(): void {
  //   console.log('Subscribing to socket ...');
  //   this.webSocketService.subscribe();
  //   this.webSocketService.outEven.subscribe((entry: EventSocketEntry[]) => {
  //     console.log('Entry received from EventEmitter.', entry);

    //  const jsonEntry = JSON.stringify(entry);
      //this.eventEntries.push(jsonEntry);

  //     this.eventEntries = entry;
  //   });
  // }

      // Get Uniqu values from columns to build filter

      // getFilterObject(fullObj, key) {
      //   const uniqChk = [];
      //   fullObj.filter((obj) => {
      //     if (!uniqChk.includes(obj[key])) {
      //       uniqChk.push(obj[key]);
      //     }
      //     return obj;
      //   });
      //   return uniqChk;
      // }
  
        // Called on Filter change

  // filterChange(filter, event) {
  
    //let filterValues = {}
  //   this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
  //   this.dataSource.filter = JSON.stringify(this.filterValues)
  // }

  // Custom filter method fot Angular Material Datatable

  // createFilter() {
  //   let filterFunction = function (data: any, filter: string): boolean {
  //     let searchTerms = JSON.parse(filter);
  //     let isFilterSet = false;
  //     for (const col in searchTerms) {
  //       if (searchTerms[col].toString() !== '') {
  //         isFilterSet = true;
  //       } else {
  //         delete searchTerms[col];
  //       }
  //     }

  //     console.log(searchTerms);

  //     let nameSearch = () => {
  //       let found = false;
  //       if (isFilterSet) {
  //         for (const col in searchTerms) {
  //           searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
  //             if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
  //               found = true
  //             }
  //           });
  //         }
  //         return found
  //       } else {
  //         return true;
  //       }
  //     }
  //     return nameSearch()
  //   }

  //   return filterFunction
  // }
  // Reset table filters

  // resetFilters() {
  //   this.filterValues = {}
  //   this.filterSelectObj.forEach((value, key) => {
  //     value.modelValue = undefined;
  //   })
  //   this.dataSource.filter = "";
  // }

 /*  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */

  openFormIncident() {
    this.dialog.open(FormIncidentComponent, {
      data: "security"
    });
  }

}
