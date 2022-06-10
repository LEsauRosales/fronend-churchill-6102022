import { EventEmitter, Injectable, Output } from '@angular/core';
import { EventSocketEntry } from 'app/interfaces/event-socket-entry';
import { environment } from 'environments/environment';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketEventsService extends Socket{

    @Output() outEven: EventEmitter<EventSocketEntry> = new EventEmitter();
    ioSocket: any;

    constructor() {
        super({
          url: environment.eventsSocketHost,
          options: {
            path: '/churchill/api/dev/socket.io',
            withCredentials: false,
          }
        });
      }
    
      subscribe(): void {
        console.log(this.ioSocket.emit('join', environment.eventsTopic));
    
        this.ioSocket.on(environment.eventsTopic, (message: EventSocketEntry) => {
          console.log('Message Received from Socket:', message);
          this.outEven.emit(message);
        });
    
        console.log('Subscription sent.');
      }
}
