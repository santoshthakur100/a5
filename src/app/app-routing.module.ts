import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  import { AboutComponent } from './about/about.component';
  import { CarComponent } from './car/car.component';
  import { HotelComponent } from './hotel/hotel.component';
  
  import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

  import { FlightComponent } from './flight/flight.component';
  import { ContactComponent } from './contact/contact.component';
  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'car', component: CarComponent },
  { path: 'hotel', component: HotelComponent },

  { path: 'hotel/:id',  component: HotelDetailsComponent},

  { path: 'flight', component: FlightComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
export const routingComponents = [AboutComponent, CarComponent, HotelComponent, FlightComponent, ContactComponent,
 PageNotFoundComponent, HotelDetailsComponent];