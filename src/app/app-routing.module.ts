import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoadScreenComponent } from './components/load-screen/load-screen.component';
import { MapComponent } from './components/map/map.component';
import { AdministracionComponent} from './components/administracion/administracion.component';
import { FerrocarrilComponent } from './components/ferrocarril/ferrocarril.component';
import { MuuaComponent } from './components/muua/muua.component';
import { BarranquillaComponent } from './components/barranquilla/barranquilla.component';
import { RegionalComponent } from './components/regional/regional.component';
import { SidebarComponent } from './components/administracion/sidebar/sidebar.component';
import { StatisticsComponent } from './components/administracion/statistics/statistics.component';


const routes: Routes = [
  {
    path: '', component: LoadScreenComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'mapita', component: MapComponent
  },
  {
    path: 'Administrador', component: AboutComponent
  },
  {
    path: 'Administracion', component: AdministracionComponent
  },
  {
    path: 'Ferrocarril', component: FerrocarrilComponent
  },
  {
    path: 'MuuA', component: MuuaComponent
  },
  {
    path: 'Barranquilla', component: BarranquillaComponent
  },
  {
    path: 'Regional', component: RegionalComponent
  },
  {
    path: 'Sidebar', component: SidebarComponent
  },
  {
    path: 'Statistics', component: StatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
