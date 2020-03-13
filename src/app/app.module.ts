import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoadScreenComponent } from './components/load-screen/load-screen.component';
import { MapComponent } from './components/map/map.component';
import { CeldasComponent } from './components/home/celdas/celdas.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { DevicesService} from './services/devices.service';
import { HttpClientModule } from '@angular/common/http';
import { MapaService } from './services/mapa.service';
import { WebSocketService} from 'src/app/services/web-socket.service';
import { FerrocarrilComponent } from './components/ferrocarril/ferrocarril.component';
import { RegionalComponent } from './components/regional/regional.component';
import { BarranquillaComponent } from './components/barranquilla/barranquilla.component';
import { MuuaComponent } from './components/muua/muua.component';
import { SidebarComponent } from './components/administracion/sidebar/sidebar.component';
import { StatisticsComponent } from './components/administracion/statistics/statistics.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoadScreenComponent,
    MapComponent,
    CeldasComponent,
    AdministracionComponent,
    FerrocarrilComponent,
    RegionalComponent,
    BarranquillaComponent,
    MuuaComponent,
    SidebarComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DevicesService,MapaService,WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }


