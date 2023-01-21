import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HerosComponent } from './pages/heros/heros.component';
import { MapsComponent } from './pages/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
