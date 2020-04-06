import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = environment.apiBaseUrl;
  constructor(private http:HttpClient,private router:Router) { }

  signUp(user){
    return this.http.post<any>(this.domain+'/users',user)
  }
  login(user){
    return this.http.post<any>(this.domain+'/users/login',user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Administrador'])
  }
}
