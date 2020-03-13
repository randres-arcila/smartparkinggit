import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened = false;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  ToAdministracion() {    
    this.router.navigateByUrl('/Administracion');
  }
  ToSidebar(){
    this.router.navigateByUrl('/Sidebar');
  }
  ToStatistics(){
    this.router.navigateByUrl('/Statistics');
  }

}
