import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CctvCamerasSiteDetails, CctvEventsDetails, CctvSiteDetails } from 'app/interfaces/cctv-details';

@Injectable({
  providedIn: 'root'
})

export class CctvService {

    url ="http://10.0.100.5:8092/api/cctv/"

  constructor(private http: HttpClient) { }

  getAtLastCCTV1000Incidents(){
    return this.http.get<CctvEventsDetails[]>(`${this.url}/getAtLastCCTV1000Incidents`);
  }

  getAtLastCCTV100Incidents(){
    return this.http.get<CctvEventsDetails[]>(`${this.url}/getAtLastCCTV100Incidents`);
  }

  getEventsDetailBySite(cctvEventsDetails: CctvEventsDetails){
      return this.http.get<CctvEventsDetails[]>(`${this.url}/getAtLastCCTV100Incidents/${cctvEventsDetails.site}`);
  }

  getSites(){
    return this.http.get<CctvSiteDetails[]>(`${this.url}/getSites`);
  }

  getSiteCctvDetails(site){
    return this.http.get<CctvCamerasSiteDetails[]>(`${this.url}/getSiteCctvDetails/${site}`);
  }




}
