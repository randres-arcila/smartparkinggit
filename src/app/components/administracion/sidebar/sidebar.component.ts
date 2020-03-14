import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened = false;
  constructor(private router: Router,private deviceService: DevicesService) { }
  dispositivos : any[] = [];
  ngOnInit() {


 }

 sendSleep(device){
   this.deviceService.sendMessage(device).subscribe((data:any)=>{
    this.dispositivos=data;
   })
 }
 sendUp(device){
  this.deviceService.sendMessage(device).subscribe((data:any)=>{
   this.dispositivos=data;
  })
}

  delete(device){
    this.deviceService.deleteDevice(device._id).subscribe((data:any)=>{
      if(data.status==='Success'){
        let aux=this.dispositivos.indexOf(device)
        this.dispositivos.splice(aux, 1);
      }    
    })
  }
  generateList(form: NgForm){
    let sector=form.value.sector;
    this.deviceService.getDevicesBySector(sector).subscribe((data:any)=>{
      this.dispositivos=data;    
        
    })

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
