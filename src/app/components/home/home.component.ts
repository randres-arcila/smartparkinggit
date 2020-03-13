import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService} from 'src/app/services/web-socket.service';
//import { Status } from 'src/app/Status'
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public timerInterval:any;
  carroBlanco = new Image();
  Disponibles : any[] = [];
  constructor(private webSocketService: WebSocketService, private router: Router, private deviceService: DevicesService) { }
  ngOnInit() {
    this.carroBlanco.src = "../../../assets/Img/Ubicacion.png";
    
    const print=()=>{
      var mapSprite = new Image();
      mapSprite.src = '../../../assets/Img/Mapa.jpg';

      context.fillStyle = "#000";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(mapSprite, 0, 0, 800, 600);
      context.drawImage(this.carroBlanco, 50.4, 205, 70, 70);

    };

    var canvas = <HTMLCanvasElement> document.getElementById('Canvas');
    var context = canvas.getContext("2d");

    this.timerInterval=setInterval(print, (1000 / 60)); // Refresh 60 times a second
    this.webSocketService.listen('news').subscribe((data)=>{
    console.log(data);
    
    });
    this.deviceService.getEmptiesCount().subscribe((data:any)=>{
      data.map(i=>{
        this.Disponibles.push(i.count);
      })


    })

    // this.deviceService.getEmptiesCount().subscribe((data:any) => {
    //   console.log(data.count)

    // });

  
  }

  ToMap() {
    this.router.navigate(['/mapita']);
  }
  ToFerrocarril() {
    this.router.navigate(['/Ferrocarril']);
  }
  ToRegional() {
    this.router.navigate(['/Regional']);
  }
  ToBarranquilla() {
    this.router.navigate(['/Barranquilla']);
  }
  ToMuuA() {
    this.router.navigate(['/MuuA']);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    console.log('cambio de pantalla');
    this.webSocketService.close();
  }
  disponibilidad(){

  }
}
