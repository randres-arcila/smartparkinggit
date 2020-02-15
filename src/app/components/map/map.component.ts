import { Component, OnInit } from '@angular/core';
import { MapaService } from 'src/app/services/mapa.service';
import { WebSocketService} from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private socketService: MapaService, private webSocketService: WebSocketService) { }

  ngOnInit() {
  //   // this.socketService.setupSocketConnection();
  //  var data= this.socketService.getConn((data) => {
  //     console.log('llega');
  //     console.log(data)
  //   })
  //   console.log('llega');
    
  //   console.log(data);
  this.webSocketService.listen('initial').subscribe((data)=>{
    console.log(data);
  })
  this.webSocketService.listen('news').subscribe((data)=>{
    console.log(data);
  })

    var canvas = <HTMLCanvasElement> document.getElementById('Canvas');
    var context = canvas.getContext("2d");

    // Map sprite
    var mapSprite = new Image();
    mapSprite.src = '../../../assets/Img/auxiliar.jpg';

    var Marker = function () {
      this.Sprite = new Image();
      // this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png"
      this.Sprite.src = "../../../assets/Img/usuario.png"
      this.Width = 69;
      this.Height = 69;
      this.XPos = 0;
      this.YPos = 0;
    }

    var Markers = new Array();

    var mouseClicked = function (mouse) {
      // Get corrent mouse coords
      var rect = canvas.getBoundingClientRect();
      var mouseXPos = (mouse.x - rect.left);
      var mouseYPos = (mouse.y - rect.top);

      console.log("Marker added");

      // Move the marker when placed to a better location
      var marker = new Marker();
      marker.XPos = mouseXPos - (marker.Width / 2);
      marker.YPos = mouseYPos - (marker.Height / 2);

      console.log(marker)

      Markers.push(marker);
    }

    // Add mouse click event listener to canvas
    canvas.addEventListener("mousedown", mouseClicked, false);

    var firstLoad = function () {
      context.font = "15px Georgia";
      context.textAlign = "center";
    }

    firstLoad();

    var main = function () {
      draw();
    };

    var draw = function () {
      // Clear Canvas
      context.fillStyle = "#000";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw map
      // Sprite, X location, Y location, Image width, Image height
      // You can leave the image height and width off, if you do it will draw the image at default size
      context.drawImage(mapSprite, 0, 0, 800, 800);

      // Draw markers
      for (var i = 0; i < Markers.length; i++) {
        var tempMarker = Markers[i];
        // Draw marker
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

        // Calculate postion text
        var markerText = "Postion (X:" + tempMarker.XPos + ", Y:" + tempMarker.YPos;

        // Draw a simple box so you can see the position
        var textMeasurements = context.measureText(markerText);
        context.fillStyle = "#666";
        context.globalAlpha = 0.7;
        context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
        context.globalAlpha = 1;

        // Draw position above
        context.fillStyle = "#000";
        context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
      }
    };

    setInterval(main, (1000 / 60)); // Refresh 60 times a second

  }


  primerPintado=() => {

  }
}
