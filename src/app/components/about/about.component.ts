import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
  }

  login(form:NgForm){
    this.authService.login(form.value).subscribe(res=>{
      localStorage.setItem('token',res.token);
      this.router.navigate(['/Administracion']);
    })
  }



}
