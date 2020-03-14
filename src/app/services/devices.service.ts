import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Device from '../Device';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor( private http: HttpClient) { }
  domain = environment.apiBaseUrl;

  addDevice(newDevice: Device): Observable<any>{
    return this.http.post(this.domain + '/devices/', newDevice);
  }

  getEmptiesCount(){
    return this.http.get(this.domain + '/devices/status');
  }
  sendMessage(device): Observable<any>{
    return this.http.post(this.domain + '/devices/message',{device});
  }
  
  getDevicesBySector(sector:string){
    return this.http.get(this.domain+'/devices/'+sector)
  }
  deleteDevice(id:string){
    return this.http.delete(this.domain+'/devices/'+id)
  }

}
