import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CarComponent } from './car/car.component';
import { HotelComponent } from './hotel/hotel.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlightComponent } from './flight/flight.component';

import { AppRoutingModule } from './app-routing.module'; 
import { DriverService } from './driver.service'; 


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HotelComponent,
    AboutComponent,
    ContactComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DriverService], //service added
  bootstrap: [AppComponent]
})
export class AppModule { }
