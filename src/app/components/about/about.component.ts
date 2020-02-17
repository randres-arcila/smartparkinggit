import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ToAdministration(form: NgForm) {
    if(form.value.user ==='Admin' && form.value.password==='root'){
      this.router.navigate(['/Administracion']);
    }else {
      alert("Invalid credentials")
    }
  }

}
