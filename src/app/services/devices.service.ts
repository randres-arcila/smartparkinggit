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
}
