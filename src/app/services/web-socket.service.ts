import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

 socket: any;
 readonly uri: String = "ws://192.168.193.53:3000";

  constructor() {

   }
   close(){
    this.socket.disconnect();
   }
  listen(eventName: String){
    this.socket = io(this.uri);
    return new Observable((Subscriber)=>{
      this.socket.on(eventName,(data)=>{
        Subscriber.next(data);
      })
    });
  }

  emit(eventName: String){
    console.log('enviado terminado');
    this.socket.emit(eventName, this.socket);

  }

}


