import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCctvDetailComponent } from '../../dashboard/dialog-cctv/dialog-cctv-detail/dialog-cctv-detail.component';
import { MatSort } from '@angular/material/sort';
import { DialogActivateProtocolComponent } from 'app/main/dashboard/dialog-cctv/dialog-cctv-detail/dialog-activate-protocol/dialog-activate-protocol.component';
import { CctvService } from 'app/services/cctv.service';
import { CctvCamerasSiteDetails, CctvSiteDetails } from 'app/interfaces/cctv-details';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

export interface UserData {
  camara: string;
  escena: string;
  ip: string;
}

const ZONE: string[] = [
  '', '', '', '', ''
];

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dialog-detail-incidents',
  templateUrl: './dialog-detail-incidents.component.html',
  styleUrls: ['./dialog-detail-incidents.component.scss']
})

export class DialogDetailIncidentsComponent implements OnInit {

    
    //cctv sites details
    cctvCamerasSiteDetails : CctvCamerasSiteDetails[];
    // set camera ip value to the iframe video
    setCamera;
    GenuineVideoUrl: SafeResourceUrl;


  displayedColumns: string[] = ['camara', 'escena', 'ip' ];
  dataSourceCctvSiteDetails = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  constructor (public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:any,
  private cctvApiService: CctvService,
  private sanitizer: DomSanitizer) {}

 ngAfterViewInit() {
  this.dataSourceCctvSiteDetails.paginator = this.paginator;
  this.dataSourceCctvSiteDetails.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSourceCctvSiteDetails.filter = filterValue.trim().toLowerCase();

  if (this.dataSourceCctvSiteDetails.paginator) {
    this.dataSourceCctvSiteDetails.paginator.firstPage();
  }
 }

 openDialogActivateProtocol() {
  this.dialog.open(DialogActivateProtocolComponent);
}

   site;
  ngOnInit(): void {
      console.log(this.data)
      this.site = "Tultitlan"
      console.log(this.data.data1)
      this.getSiteCctvDetails();
      this.showCameraAlert(this.data.data1)
  }

  getSiteCctvDetails(){
      console.log(this.site)
      this.cctvApiService.getSiteCctvDetails(this.site).subscribe((data)=>{
          console.log(data)
          this.cctvCamerasSiteDetails = data
          this.dataSourceCctvSiteDetails.data = data
      })
  }

  showCameraAlert(ip){
    this.setCamera = "http://"+ip
    console.log(this.setCamera)
    this.GenuineVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.setCamera)
    
  }

  setCameraView(ip){
      this.setCamera = "http://"+ip
      console.log(this.setCamera)
      this.GenuineVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.setCamera)
      
  }

}