import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Statistics from '../Statistics';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }
  domain = environment.apiBaseUrl;

  generateStatistics(statistics: Statistics): Observable<any>{
    return this.http.post(this.domain + '/statistics', statistics);
  }

  getStatistics(){
    return this.http.get(this.domain + '/statistics');
  }
}
