import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
    id: string;
    name: string;
    date:string;
    progress: string;
    color: string;
  }
  
/** Constants used to fill up our data base. */
const COLORS: string[] = [
    'Alto', 'Medio', 'Bajo',
  ];
  const NAMES: string[] = [
    'GDLJ', 'CDMX', 'QRO',
  ];

  const DATES: string[] = [
    '15/12/20', '15/12/20', '16/12/20',
  ];

@Component({
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class QuickPanelComponent implements OnInit, OnDestroy, AfterViewInit {

    displayedColumns: string[] = ['Tipo', 'Nivel', 'Ubicación', 'Fecha', ];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    date: Date;
    events: any[];
    notes: any[];
    settings: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {

         // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

             // Assign the data to the data source for the table to render
             this.dataSource = new MatTableDataSource(users);
            
        // Set the defaults
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the events
        this._httpClient.get('api/quick-panel-events')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response: any) => {
                this.events = response;
            });

        // Subscribe to the notes
        this._httpClient.get('api/quick-panel-notes')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response: any) => {
                this.notes = response;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    
      applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  
    const date = DATES[Math.round(Math.random() * (DATES.length - 1))];

    return {
      id: id.toString(),
      name: name,
      date:date,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }