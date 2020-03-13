import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { NgForm } from '@angular/forms';
import Device from 'src/app/Device';
import { Router } from '@angular/router';
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  device: Device;

  constructor(private deviceService: DevicesService, private router: Router) {
  }

  Device ;
  ngOnInit() {
  }

  save(form: NgForm){
    this.device = {
      canvas_location: {
        x: form.value.posicion_X,
        y: form.value.posicion_Y
      },
      real_location: {
        sector: form.value.sector,
        identifier: form.value.identificador
      },
      dev_eui: form.value.eui
    }
    // console.log(this.device)
    this.deviceService.addDevice(this.device).subscribe((data) => {
      alert('Agregado correctamente'); 
      form.resetForm();
    });
    // this.deviceService.addDevic();

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
