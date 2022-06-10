export class DriverScoring{
   
    id: string;
    driver_id: string;
    driver_name:string;
    transport_line:string;
    scoring:string;
    created_at:string;

}

export class TransportLine{
   id: string;
   transport_line:string;
   scoring: string;
   driving_time: string;
   created_at:string;
}


export class TransportLineMean{
    transportLine: string;
    scoringMean:string;
 }