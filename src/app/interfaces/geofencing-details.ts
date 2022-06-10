export class GeofencingDetails{

    geofencingId   ?:  number;
    name  :  string;
    type  :  string;
    alert :  string;
    mt_geocoords: any[];
    ilsp_mt_risk_zone_geocoords: any[];
    ilsp_mt_authorized_stop_geocoords: any[];
    ilsp_mt_route_deviation_geocoords: any[];
    /*  geofencingCoords:  [{
                        latitude:string,
                        longitude:string;
                        }];  */
}

