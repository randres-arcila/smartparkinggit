import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;


  constructor() {

   }

  uri = environment.apiWebSocket;

   connect(){
    this.socket = io(this.uri);
   }
   close(){
    this.socket.disconnect();
   }
  listen(eventName: String){

    return new Observable((Subscriber)=>{
      this.socket.on(eventName,(data)=>{
        Subscriber.next(data);
      })
    });
  }

  emit(eventName: String,data:String){
    console.log('enviado terminado');
    this.socket.emit(eventName,data);

  }

}


