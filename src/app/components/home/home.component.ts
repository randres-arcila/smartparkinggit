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
  parqueadero18={
    _id:'',
    count:0
  };
  circunregional={
    _id:'',
    count:0
  };
  circunbarranquilla={
    _id:'',
    count:0
  };
  circunferrocarril={
    _id:'',
    count:0
  };
  parqueaderomuua={
    _id:'',
    count:0
  };

  constructor( private router: Router, private deviceService: DevicesService) {
    this.deviceService.getEmptiesCount().subscribe((data:any)=>{
      
      this.Disponibles=data;
      console.log(this.Disponibles);
      this.parqueaderomuua=this.Disponibles[0];
      this.parqueadero18=this.Disponibles[1];
      this.circunregional=this.Disponibles[2];
      this.circunferrocarril=this.Disponibles[3];
      this.circunbarranquilla=this.Disponibles[4];

    })

   }
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
  }

}
