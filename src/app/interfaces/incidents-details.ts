export class IncidentsDetails{

  //  geofencingId   ?:  number;
    id: string;
    name  :  string;
    desc  :  string;
    create_at : string;
    update_at : string;
    risk_level: string;
    action_protocol: string;
    key_word: string;
    alerts: string;
    alertsDetails: {
        action_protocol: string,
        name: string,
        risk_level: string,
        id: string
    };

}

export class IncidentsIlspDetails {
    created_at: string;
    drive_name:  string;
    latitude:  string;
    longitude:  string;
    plate: string;
    speed:  string;
    transport_line:  string;
    travel_dt_id:  string;
}