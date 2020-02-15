import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

 socket: any;
 readonly uri: String = "ws://192.168.25.26:3000";

  constructor() {
    this.socket = io(this.uri)
   }

  listen(eventName: String){
    return new Observable((Subscriber)=>{
      this.socket.on(eventName,(data)=>{
        Subscriber.next(data);
      })
    });
  }

  emit(eventName: String, data:any){
    this.socket.emit(eventName, data);
  }

}


