import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import { DialogFormKeyWordsComponent } from './dialog-form-key-words/dialog-form-key-words.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

export interface UserData {
  palabra_clave: string;
  alerta  :  string;
  riesgo  :  string;
  protocolo : string;
  // create_at: string;
  update_at: string;
}

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-key-words',
  templateUrl: './dialog-key-words.component.html',
  styleUrls: ['./dialog-key-words.component.scss']
})
export class DialogKeyWordsComponent implements OnInit {

    ///TABLA HISTÓRICO
displayedColumns: string[] = ['palabra_clave', 'alerta', 'riesgo', 'protocolo','update_at'];
dataSourceKeyWords = new MatTableDataSource();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  keyWords: IncidentsDetails[];
  constructor(private chIncidentsApiService: ChIncidentsApiService,
                public dialog: MatDialog) { }

                  ///PAGINATOR
    ngAfterViewInit() {
      this.dataSourceKeyWords.paginator = this.paginator;
      this.dataSourceKeyWords.sort = this.sort;
    }
  
    ///FILTRO
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceKeyWords.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSourceKeyWords.paginator) {
        this.dataSourceKeyWords.paginator.firstPage();
      }
    }


  ngOnInit(): void {
        this.getAllKeyWords();

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

  getAllKeyWords(){
    this.chIncidentsApiService.getAllKeyWords().subscribe((data)=>{
        console.log(data);
        this.keyWords = data;
        this.dataSourceKeyWords.data = this.keyWords
        console.log(this.keyWords);
        });
  }
  
  openDialogFormKeyWords() 
  {
   const dialogRef =  this.dialog.open(DialogFormKeyWordsComponent);
   dialogRef.afterClosed().subscribe(()=>{
        this.getAllKeyWords();
    })
  }

  deleteKeyWord(keyword)

  {
    this.chIncidentsApiService.deleteKeyWord(keyword).subscribe((data)=>{
        console.log(data)
        this.getAllKeyWords();
      });
      {
        console.log(keyword)
        console.log(keyword.id)
      }
     
}


openDialogUpdateKeyWord(keyWord) 
{
  const dialogRef = this.dialog.open(DialogFormKeyWordsComponent,{ data : keyWord });

  dialogRef.afterClosed().subscribe(()=>{
      this.getAllKeyWords();
  })


}


}

