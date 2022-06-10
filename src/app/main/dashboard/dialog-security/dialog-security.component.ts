import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventSocketEntry } from 'app/interfaces/event-socket-entry';
import { SecurityAlarmsDetails } from 'app/interfaces/security-alarms-details';
import { ChFleetApiService } from 'app/services/ch-fleet-api.service';
import { WebSocketEventsService } from 'app/services/web-socket-events.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSecurityDetailComponent } from './dialog-security-detail/dialog-security-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-security',
  templateUrl: './dialog-security.component.html',
  styleUrls: ['./dialog-security.component.scss']
})
export class DialogSecurityComponent implements OnInit, AfterViewInit {

  //Socket Event Entry
  //eventEntries: string[] = [];
  eventEntries: EventSocketEntry[];

  //Security interface
  securityAlarm: SecurityAlarmsDetails[];
  dataSource = new MatTableDataSource();
  //Angular Material Table and Filter Function
  filterValues = {};
  displayedColumns: string[] = [                                
                                'status', 
                                'idTicket', 
                                'eventDate',                                 
                                'idAsset', 
                                'type',
                                'origin',
                                'personalAsociado',
                                'ubicacion',
                                'causaIncidencia',
                                'protocolo',
                                'solucion'
                            ];
  filterSelectObj = [];
  //data source read data from web socket
  //  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private webSocketService: WebSocketEventsService,
              private emergencyEventsService: ChFleetApiService, public dialog: MatDialog) {
    // Object to create Filter for the colummnprop in with the reference orders.orderStatus and so on
    this.filterSelectObj = [
        {
          name: 'Ticket Status',
          columnProp: 'status',
          options: []
        }, {
          name: 'Provider',
          columnProp: 'provider',
          options: []
        }
      ]
    }

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

    //Socket subscribe
    this.subscribe();
    //web service emergency events
    this.emergencyEventsService.getEmergencyEmployeeEvents().subscribe((data: SecurityAlarmsDetails[])=>{
        console.log(data);
        this.dataSource.data = data;
        console.log("emergency!")
        this.filterSelectObj.filter((o) => {
            o.options = this.getFilterObject(this.securityAlarm, o.columnProp);
          });
    });

    this.dataSource.filterPredicate = this.createFilter();
    this.dataSource.paginator = this.paginator;
  }

  subscribe(): void {
    console.log('Subscribing to socket ...');
    this.webSocketService.subscribe();
    this.webSocketService.outEven.subscribe((entry: EventSocketEntry[]) => {
      console.log('Entry received from EventEmitter.', entry);
    //  const jsonEntry = JSON.stringify(entry);
      //this.eventEntries.push(jsonEntry);
      this.eventEntries = entry;
    });
  }

      // Get Uniqu values from columns to build filter
      getFilterObject(fullObj, key) {
        const uniqChk = [];
        fullObj.filter((obj) => {
          if (!uniqChk.includes(obj[key])) {
            uniqChk.push(obj[key]);
          }
          return obj;
        });
        return uniqChk;
      }
  
        // Called on Filter change
  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }

    return filterFunction
  }
  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }

  openDialogSecurityDetail() {
    this.dialog.open(DialogSecurityDetailComponent);
  }

 /*  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */
}
  

