import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  import { AboutComponent } from './about/about.component';
  import { CarComponent } from './car/car.component';
  import { HotelComponent } from './hotel/hotel.component';
  import { FlightComponent } from './flight/flight.component';
  import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'car', component: CarComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
