import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferrocarril',
  templateUrl: './ferrocarril.component.html',
  styleUrls: ['./ferrocarril.component.css']
})
export class FerrocarrilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
