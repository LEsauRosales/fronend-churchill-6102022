import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IncidentsDetails } from 'app/interfaces/incidents-details';
import { IncidentsGen, IncidentsGroups, IncidentsLocations, IncidentsUsersDetails, TwitterAccount } from 'app/interfaces/twitter-accounts';

@Injectable({
  providedIn: 'root'
})
export class ChIncidentsApiService {

/*  url = "http://10.0.100.99:3200/incidents"
    url2 = "http://10.0.100.99:8091/api/incidents"
*/

urlIncidentsv0 = "http://10.0.100.5:8093/incidents"
urlIncidentsv1 = "http://10.0.100.5:8091/api/incidents"
urlPanicButtonsMix = "http://10.0.100.5:8097/api/PanicButtons"
urlInfoHub = "http://10.0.100.5:8094/api/infohub"

  constructor(private http: HttpClient) { }

  //RiskType
  getAllRiskTypes(){
    return this.http.get<IncidentsDetails[]>(`${this.urlIncidentsv0}/risktypes`);
  }

  //ActionProtocol
  postNewActionProtocol(registerActionProtocol: IncidentsDetails){
    return this.http.post(`${this.urlIncidentsv0}/actionprotocol`, registerActionProtocol,  {responseType: 'text'} );
    }

    getAllActionProtocols(){
        return this.http.get<IncidentsDetails[]>(`${this.urlIncidentsv0}/actionprotocols`);
    }

  //AlertType
  getAllAlertTypes(){
    return this.http.get<IncidentsDetails[]>(`${this.urlIncidentsv0}/alerttypes`);
  }

  postNewAlertType(registerAlertType: IncidentsDetails){
    return this.http.post(`${this.urlIncidentsv0}/alerttype`, registerAlertType,  {responseType: 'text'} );
  }

  deleteAlertTypes(alert: IncidentsDetails){
    return this.http.delete(`${this.urlIncidentsv0}/alerttype/${alert.id}`, {responseType: 'text'} );
}

  //KeyWords
  getAllKeyWords(){
    return this.http.get<IncidentsDetails[]>(`${this.urlIncidentsv0}/keywords`);
  }

  postNewKeyWord(registerKeyWord: IncidentsDetails){
    return this.http.post(`${this.urlIncidentsv0}/keyword`, registerKeyWord,  {responseType: 'text'} );
  }

  putKeyWord(keyWord: IncidentsDetails){
    return this.http.put(`${this.urlIncidentsv0}/keyword/${keyWord.id}`, keyWord,  {responseType: 'text'} );
}

  deleteKeyWord(keyWords: IncidentsDetails){
    return this.http.delete(`${this.urlIncidentsv0}/keyword/${keyWords.id}`, {responseType: 'text'} );
}

  //Twitter Accounts
    getAllTwitterAccounts(){
        return this.http.get<TwitterAccount[]>(`${this.urlIncidentsv0}/twitteraccounts`);
      }

      postNewTwitterAccount(twitterAccount: TwitterAccount){
    return this.http.post(`${this.urlIncidentsv0}/twitteraccount`, twitterAccount,  {responseType: 'text'} );
    }

    putTwitterAccount(twitterAccount: TwitterAccount){
        return this.http.put(`${this.urlIncidentsv0}/twitteraccounts/${twitterAccount.id}`, twitterAccount,  {responseType: 'text'} );

    }

    deleteTwitterAccount(twitterAccount: TwitterAccount){
        return this.http.delete(`${this.urlIncidentsv0}/twitteraccounts/${twitterAccount.id}`, {responseType: 'text'} );

    }

    //Calibration twitter api 2 url2 
    getUserDetails(){
        return this.http.get<IncidentsUsersDetails[]>(`${this.urlIncidentsv1}/getUsers`);
    }

    getImpactGroups(){
        return this.http.get<IncidentsGroups[]>(`${this.urlIncidentsv1}/getImpactGroups`);
    }

    getLocations(){
        return this.http.get<IncidentsLocations[]>(`${this.urlIncidentsv1}/getLocations`);
    }

    getAtLast1000Incidents(){
        return this.http.get<IncidentsGen[]>(`${this.urlIncidentsv1}/getAtLast1000Incidents`);
    }

    getAtLast4Incidents(){
        return this.http.get<IncidentsGen[]>(`${this.urlIncidentsv1}/getAtLast4Incidents`);
    }

    getRelationImpactGroupsUsers(){
        return this.http.get(`${this.urlIncidentsv1}/getRelationImpactGroupsUsers`);
    }

    getRelationUsersLocation(){
        return this.http.get<IncidentsUsersDetails>(`${this.urlIncidentsv1}/getRelationUsersLocation`);
    }

    getRelationUsersLevelRisk(){
        return this.http.get(`${this.urlIncidentsv1}/getRelationUsersLevelRisk`);
    }

    postRelationUsersLocationWithLocation(location){
        return this.http.post(`${this.urlIncidentsv1}/postRelationUsersLocationWithLocation`, location);
    }

    getUserCalibrationPrincipalTable(){
      return this.http.get(`${this.urlIncidentsv1}/getUserCalibrationPrincipalTable`);
  }

  getInfoHub(){
    return this.http.get(`${this.urlInfoHub}/getInfoHub`);
}

getInfoHubPanicButtonsMix(){
  return this.http.get(`${this.urlPanicButtonsMix}/getCurrentPanicButtonsMix`);
}

  // -------------Posts

  postNewIncidentsUser(incidentsUsersDetails){
    return this.http.post(`${this.urlIncidentsv1}/postNewUser`, incidentsUsersDetails,  {responseType: 'text'} );
    }

    postNewIncidentsLocation(location){
      return this.http.post(`${this.urlIncidentsv1}/postLocation`, location,  {responseType: 'text'} );
      }

      postNewIncidentsImpactGroup(impactGroup){
        return this.http.post(`${this.urlIncidentsv1}/postImpactGroup`, impactGroup,  {responseType: 'text'} );
        }


    postNewInfoHubReport(newReport){
        return this.http.post(`${this.urlInfoHub}/postIncidentReport`, newReport,  {responseType: 'text'} );
    }
      
}
