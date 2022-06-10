export class TwitterAccount{

      id: string;
      name  :  string;
      account  :  string;
      twitter_id : string;
      category : string;
      create_at: string;
      update_at: string;
  }

export class TwitterKeyWords{
    id: string;
    ket_word  :  string;
    created_at  :  string;
    updated_at : string;
    category : string;
    create_at: string;
    update_at: string;
    alerts:{
        id:string;
        name: string;
        created_at:string;
        updated_at:string;
        risk_level:string;
        action_protocol:string;
    }
}

export class IncidentsUsersDetails{
    userName  :  string;
    userLastName  :  string;
    userEmail : string;
    phoneNumber : string;
    employeeNumber: string;
    jobRole: string;
    impactGroup: string;
    idImpactGroup?: string;
    position: string;  
    userEmployeeNumber: string;  
    module: string;
}

export class IncidentsNewUser{
    name  :  string;
    last_name  :  string;
    phone_number : string;
    employee_number : string;
    email: string;
}

export class IncidentsGroups{
    group: string;
    director: string;
}

export class IncidentsLocations{
    location:string;
}

export class IncidentsNewLocations{
    created_at: string;
    location:string;
}

export class IncidentsNewGroup{
    impact_group: string;
    director:string;
    email: string;
}

export class IncidentsNewIncidentReportRegister{
    name: string;
    rol: string;
    business_division: string;
    incident_origin: string;
    personal: string;
    incident_date: string;
    incident_hour: string;
    incident_ubication: string;
    incident_description: string;
    protocolo: string;
    incident_solution: string;
    incident_type: string;
    incident_cause: string;
    validation_solution;
    seguimiento: string;
    phone_number: string;
}

export class CurrentPanicButtonsMix{
    name: string;
    rol: string;
    business_division: string;
    incident_origin: string;
    personal: string;
    incident_date: string;
    incident_hour: string;
    incident_ubication: string;
    incident_description: string;
    protocolo: string;
    incident_solution: string;
    incident_type: string;
    incident_cause: string;
    validation_solution;
    seguimiento: string;
    phone_number: string;
}

export class IncidentsEmergencyEmployeeNumber{
    incident_type: string;
    incident_origin: string;
    personal: string;
    incident_ubication: string;
    incident_cause: string;
    protocolo: string;
    incident_solution: string;
}


export class IncidentsGen{
    key_word: string;
    location: string;
    creat_at: string;
    tweet_text: string;
    name_account: string;
    category: string;
    details_account: string;
    action_protocol: string;
    level_risk: string;
    mt_incidents_alerts:string;
    alert_type: string;
}