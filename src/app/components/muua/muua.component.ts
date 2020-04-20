import { Component, OnInit } from '@angular/core';
import { WebSocketService} from 'src/app/services/web-socket.service';


@Component({
  selector: 'app-muua',
  templateUrl: './muua.component.html',
  styleUrls: ['./muua.component.css']
})
export class MuuaComponent implements OnInit {
  devices: any[] = [];
  public timerInterval:any;

  constructor(private webSocketService: WebSocketService) { }
  sprite1 = new Image();
  sprite2 = new Image();
  sprite3 = new Image();

  ngOnInit() {
    console.log("conected");
    this.sprite1.src = "../../../assets/Img/Libre.png";
    this.sprite2.src = "../../../assets/Img/Ocupado.png";
    this.sprite3.src = "../../../assets/Img/Sleep.png";
    this.webSocketService.connect();
    this.webSocketService.emit('Join','parqueaderomuua');

    this.webSocketService.listen('initial').subscribe((data:any)=>{

    this.devices=data;
    console.log(this.devices);
  });
    const print=()=>{
      var mapSprite = new Image();
      mapSprite.src = '../../../assets/Img/MuuAM.jpg';
      context.fillStyle = "#000";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(mapSprite, 0, 0, 800, 800);

      this.devices.map( device=>{
        if(device.state==='Libre'){
          context.drawImage(this.sprite1, device.canvas_location.x,device.canvas_location.y,80,80);
        }
        else if(device.state=='Ocupado'){
          context.drawImage(this.sprite2, device.canvas_location.x,device.canvas_location.y,80,80);
        }
        else{
          context.drawImage(this.sprite3, device.canvas_location.x,device.canvas_location.y,80,80);
        }
      })

    };
    var canvas = <HTMLCanvasElement> document.getElementById('Canvas');
    var context = canvas.getContext("2d");

    this.timerInterval=setInterval(print, (1000 / 60)); // Refresh 60 times a second
    this.webSocketService.listen('news').subscribe((data)=>{
      console.log(data);
    });
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    console.log('cambio de pantalla');
    this.webSocketService.close();
  }
}
