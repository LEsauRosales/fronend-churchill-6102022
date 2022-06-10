import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TwitterAccount } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormAccountComponent } from './dialog-form-account/dialog-form-account.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

export interface UserData {
  id: string;
  name  :  string;
  account  :  string;
  twitter_id : string;
  category : string;
  create_at: string;
  update_at: string;
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-cuentas',
  templateUrl: './dialog-cuentas.component.html',
  styleUrls: ['./dialog-cuentas.component.scss']
})
export class DialogCuentasComponent implements OnInit {

  ///TABLA HISTÓRICO
displayedColumns: string[] = ['nombre', 'cuenta', 'twitter_id', 'categoria', 'update_at'];
dataSourceTwitterAccounts = new MatTableDataSource();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

    twitterAccounts : TwitterAccount[];

  constructor(public dialog: MatDialog,
    private chIncidentsApiService: ChIncidentsApiService,) { }

    ///PAGINATOR
    ngAfterViewInit() {
      this.dataSourceTwitterAccounts.paginator = this.paginator;
      this.dataSourceTwitterAccounts.sort = this.sort;
    }
  
    ///FILTRO
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceTwitterAccounts.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSourceTwitterAccounts.paginator) {
        this.dataSourceTwitterAccounts.paginator.firstPage();
      }
    }

  ngOnInit(): void {
    this.getAllTwitterAccounts();

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

  getAllTwitterAccounts(){
    this.chIncidentsApiService.getAllTwitterAccounts().subscribe((data)=>{
        console.log(data);
        this.twitterAccounts = data;
        this.dataSourceTwitterAccounts.data = this.twitterAccounts
        console.log(this.twitterAccounts);
        });
  }

  openDialogUpdateAccount(twitterAccount) 
  {
    const dialogRef = this.dialog.open(DialogFormAccountComponent,{ data : twitterAccount });

    dialogRef.afterClosed().subscribe(()=>{
        this.getAllTwitterAccounts();
    })
  }


  openDialogFormAccount() 
  {
   const dialogRef =  this.dialog.open(DialogFormAccountComponent);
   dialogRef.afterClosed().subscribe(()=>{
        this.getAllTwitterAccounts();
    })
  }

  deleteTwitterAccount(twitterAccount){
      this.chIncidentsApiService.deleteTwitterAccount(twitterAccount).subscribe((data)=>{
          console.log(data)
          this.getAllTwitterAccounts();
        });
       
  }
  }

