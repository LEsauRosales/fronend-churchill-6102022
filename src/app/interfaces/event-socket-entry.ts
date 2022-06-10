export class EventSocketEntry {

    public constructor(
      public id?: number,
      public globalEventId?: number,
      public providerId?: number,
      public provider?: string,
      public eventName?: string,
      public eventDate?: Date,
      public context?: string,
      public driverId?: number,
      public driver?: string,
      public assetId?: number,
      public asset?: string,
      public createdAt?: Date
    ) { }
  
  }
  