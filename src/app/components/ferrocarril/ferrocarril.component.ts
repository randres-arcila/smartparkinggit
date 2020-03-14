import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService} from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-ferrocarril',
  templateUrl: './ferrocarril.component.html',
  styleUrls: ['./ferrocarril.component.css']
})
export class FerrocarrilComponent implements OnInit {
  devices: any[] = [];

  constructor(private router: Router,private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.webSocketService.connect();
    this.webSocketService.emit('Join','circunferrocarril');
    this.webSocketService.listen('initial').subscribe((data:any)=>{
    this.devices=data;
    console.log(this.devices);
  });
  }

  ngOnDestroy() {
    // clearInterval(this.timerInterval);
    console.log('cambio de pantalla');
    this.webSocketService.close();
  }


}
