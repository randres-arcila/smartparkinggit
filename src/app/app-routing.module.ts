import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoadScreenComponent } from './components/load-screen/load-screen.component';
import { MapComponent } from './components/map/map.component';
import { AdministracionComponent} from './components/administracion/administracion.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
