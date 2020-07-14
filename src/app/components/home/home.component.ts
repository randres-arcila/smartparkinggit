import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WebSocketService} from 'src/app/services/web-socket.service';
//import { Status } from 'src/app/Status'
import { DevicesService } from 'src/app/services/devices.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{
  public timerInterval:any;
  carroBlanco = new Image();
  ubicacion = new Image();
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

 
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  elements = [];
  elemLeft = 0;
  elemTop = 0;
  context: CanvasRenderingContext2D;

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
    this.elements.push(
    {
      imagen:"../../../assets/Img/SmartParkingCarroBlanco.png", 
      xPos: 49, 
      yPos: 205,
      width: 70,
      height: 70,
    },
    {
      imagen:"../../../assets/Img/SmartParkingCarroBlanco.png", 
      xPos: 690, 
      yPos: 80,
      width: 70,
      height: 70,
    },
    {
      imagen:"../../../assets/Img/SmartParkingCarroBlanco.png", 
      xPos: 636, 
      yPos: 490,
      width: 70,
      height: 70,
    },
    {
      imagen:"../../../assets/Img/Ubicacion.png", 
      xPos: 435, 
      yPos: 435,
      width: 70,
      height: 70,
    },
    {
      imagen:"../../../assets/Img/Ubicacion.png", 
      xPos: 481, 
      yPos: 153,
      width: 70,
      height: 70,
    });
    
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.elemLeft = (this.canvas.nativeElement as HTMLCanvasElement).offsetLeft;
    this.elemTop = (this.canvas.nativeElement as HTMLCanvasElement).offsetTop;
    this.canvas.nativeElement.addEventListener('click', this.clicka, false);

    this.timerInterval=setInterval(this.print, (1000 / 60)); // Refresh 60 times a second
    
  }

  private print = () =>{
    this.carroBlanco.src = "../../../assets/Img/SmartParkingCarroBlanco.png";
    this.ubicacion.src = "../../../assets/Img/Ubicacion.png";
    var mapSprite = new Image();
    mapSprite.src = '../../../assets/Img/Mapa.jpg';
    this.context.drawImage(mapSprite, 0, 0, 800, 600);
    
    this.elements.forEach((element) => {
      const img = new Image();
      img.src = element.imagen;
      this.context.drawImage( img, element.xPos, element.yPos, element.width, element.height);
    })
  }

  private clicka = (event) => {
    let x = event.pageX - this.elemLeft,
        y = event.pageY - this.elemTop;
      console.log(x, y);
      
      const condition = (element) => {
        return y > element.yPos && y < element.yPos + element.height && x > element.xPos && x < element.xPos + element.width;
      }
  
      const elementIndex = this.elements.findIndex(condition);
      console.log(this.elements.findIndex);
      switch (elementIndex) {
        case 0: 
          this.ToFerrocarril();
          break;
        case 1: 
          this.ToBarranquilla();
          break;
        case 2:
          this.ToRegional();
          break;
        case 3:
          this.ToMuuA();
          break;
        case 4:
          this.ToMap();
          break;
        default:
        //Error inminente
        console.log("fallé, jaja saludos");
        break;
      }
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
