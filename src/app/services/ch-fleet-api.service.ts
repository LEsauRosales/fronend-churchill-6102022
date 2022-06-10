import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeofencingDetails } from 'app/interfaces/geofencing-details';
import { IncidentsIlspDetails } from 'app/interfaces/incidents-details';
import { LogisticTravelDetails } from 'app/interfaces/logistic-travel-details';
import { SecurityAlarmsDetails } from 'app/interfaces/security-alarms-details';
import { DriverScoring, TransportLine, TransportLineMean } from 'app/interfaces/socring-sipa-details';
import { CurrentPanicButtonsMix, TwitterAccount, TwitterKeyWords } from 'app/interfaces/twitter-accounts';
import { VehicleDetails } from 'app/interfaces/vehicle-details';

@Injectable({
  providedIn: 'root'
})
export class ChFleetApiService {


   // urlDev = "http://23.23.37.64:80/churchill/api/dev"
    url = "http://10.0.100.5/churchill/api/v1"
    

    localhost = "http://10.0.100.5:3000/geofencings"

    ilspRiskZone = "http://10.0.100.5:8080/riskzones"
    ilspAuthorizedStop = "http://10.0.100.5:8080/authorizedzones"
    ilspRouteDeviation = "http://10.0.100.5:8080/routedeviations"
    ilspOverspeed = "http://10.0.100.5:8080/topIncidents"
    ilspScoring = "http://10.0.100.5:8080"

    //Twitter API
    url_twitter_api_1 = "http://10.0.100.5:3200"

    ilspTravelLogisticDetails ="http://10.0.100.5:8080/traveldetaillogistic"
    constructor(private http: HttpClient) { }
  
    getAllProviders(){
      return this.http.get(`${this.url}/master-tables/providers`);
    }
   
    //Events
    getGlobalEvents(){
        return this.http.get(`${this.url}/master-tables/global-events`);
    }

    getEventsFirstCall(){
        return this.http.get(`${this.url} /events/provider/FRC`);
    }

    getEventsSmartTracker(){
        return this.http.get(`${this.url} /events/provider/SMT`);
    }

    //Last Locations
    getLastLocationFirstCall(){
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/FRC/last-update`);
    }

     getLastLocationSmartTracker(){
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/SMT/last-update`);
    } 

/*     
        No working
        getLastLocationSmartTracker(){
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/SMT/last/24/hours`);
    } */
    
    //Get global event Pannic Button & Emergency CAll

    // getPanicButtonEventsMix(){
    //     let params1 = new HttpParams().set('date', '2021-02-22');
    //     return this.http.get<CurrentPanicButtonsMix[]>(`${this.url}/events/socket-events`,{params:params1});
    // }

    getCurrentPanicButtonsMix(){
        return this.http.get(`${this.localhost}`);
    }

    getEmergencyEmployeeEvents(){
        let params1 = new HttpParams().set('date', '2021-02-22');
        return this.http.get<SecurityAlarmsDetails[]>(`${this.url}/events/socket-events`,{params:params1});
      
    }

    //Tracking Locations
    getTrackingLocation(assetId: string, provider: string,date: string){
       //  let params1 = new HttpParams().set('date', date);
      let params1 = new HttpParams().set('date',  '2021-02-21');
        return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/${provider}/asset/${assetId}`,{params:params1});
       // return this.http.get<VehicleDetails[]>(`${this.url}/geolocation/provider/FRC/asset/6?date=2020-12-14`);
    }

    //------------- Geofencing services ---------------
    postNewGeofencing(registerGeofencing: GeofencingDetails){
        return this.http.post(`${this.localhost}`, registerGeofencing,  {responseType: 'text'} );
    }

    deleteGeofencing(id: number){
        return this.http.delete(`${this.localhost}/${id}`);
      }

    getAllGeofencings(){
        return this.http.get<GeofencingDetails[]>(`${this.localhost}`);
    }

    //-------------- Zone Risk service ------------
    postNewRiskZone(registerGeofencing: GeofencingDetails){
        return this.http.post(`${this.ilspRiskZone}`, registerGeofencing,  {responseType: 'text'} );
    }

    deleteRiskZone(id: number){
        return this.http.delete(`${this.ilspRiskZone}/${id}`);
      }

    getAllRiskZone(){
        return this.http.get<GeofencingDetails[]>(`${this.ilspRiskZone}`);
    }

    //------------- Authorized Stop ----------------

    postNewAuthorizedStop(registerGeofencing: GeofencingDetails){
        return this.http.post(`${this.ilspAuthorizedStop}`, registerGeofencing,  {responseType: 'text'} );
    }

    deleteAuthorizedStop(id: number){
        return this.http.delete(`${this.ilspAuthorizedStop}/${id}`);
      }

    getAllAuthorizedStop(){
        return this.http.get<GeofencingDetails[]>(`${this.ilspAuthorizedStop}`);
    }

    //------------- Route Deviation ----------------

    
    postNewRouteDeviation(registerGeofencing: GeofencingDetails){
        return this.http.post(`${this.ilspRouteDeviation}`, registerGeofencing,  {responseType: 'text'} );
    }

    deleteRouteDeviation(id: number){
        return this.http.delete(`${this.ilspRouteDeviation}/${id}`);
      }

    getAllRouteDeviation(){
        return this.http.get<GeofencingDetails[]>(`${this.ilspRouteDeviation}`);
    }
    

    //------------ Scoring SIPA -------------------

    getAllDriverScoring(){
        return this.http.get<DriverScoring[]>(`${this.ilspScoring}/driverscoring`);
    }

    getAllTransportLineScoring(){
        return this.http.get<TransportLine[]>(`${this.ilspScoring}/tranposrtlinescoring`);
    }

    getAllTransportLineScoringMean(){
        return this.http.get<TransportLineMean[]>(`${this.ilspScoring}/tranposrtlinescoringmean`);
    }

    //------- Location ILSP -----
    getLastAllLocationIlsp(){
        return this.http.get<LogisticTravelDetails[]>(`${this.ilspScoring}/lastlogisticlocations`);
    }

    //----- OverSpeed ILSP ----
    getTopIncidentsIlsp(){
        return this.http.get<IncidentsIlspDetails[]>(`${this.ilspOverspeed}`);
    }  

    //----- Travel Detail ------
    getTravelDetailByDt(travel: string){
        let params1 = new HttpParams().set('travel', travel);
        return this.http.get<LogisticTravelDetails[]>(`${this.ilspTravelLogisticDetails}`,{params: params1})
    }

  /*   //Twitter api 1 ( crud key word - crud twitter account - crud alerts type )
    getTwitterKeyWord(){
        return this.http.get<TwitterAccount[]>(`${this.url_twitter_api_1}/incidents/keywords`);
    }

    getTwitterAccounts(){
        return this.http.get<TwitterKeyWords[]>(`${this.url_twitter_api_1}/incidents/twitteraccounts`);
    }
 */
}
