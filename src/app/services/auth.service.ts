import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  signUp(user){
    return this.http.post<any>(this.domain+'/users',user)
  }
  login(user){
    return this.http.post<any>(this.domain+'/users/login',user)
  }
}
