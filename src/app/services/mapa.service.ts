import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  socket;
  list;
  constructor() {
    this.socket = io(environment.apiBaseUrl);
    
   }

  setupSocketConnection() {
    this.socket = io(environment.apiBaseUrl);
  }

  getMap(cb: (data) => void) {
    this.socket.emit('news');
    this.socket.on('news', (cb) => {
      console.log(cb)
    });
    this.socket.on('connection', (cb) => {
      console.log(cb)
    });
  }

  getConn(cb: (data) => void) {
    var resul=this.socket.on('initial', (cb) => {
         cb.map((ll)=>{
         console.log(ll._id);
         console.log(ll.canvas_location.x);
      })
      return cb;
    });
    return resul
  }
}

