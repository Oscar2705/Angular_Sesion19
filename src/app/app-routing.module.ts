import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './pages/heros/heros.component';
import { HomeComponent } from './pages/home/home.component';
import { MapsComponent } from './pages/maps/maps.component';

const routes: Routes = [
  {
    //Me redirecciona a home cuando este vacio
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'heros',
    component:HerosComponent
  },
  {
    path:'maps',
    component:MapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
