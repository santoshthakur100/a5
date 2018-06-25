import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { DriverService } from './driver.service';
import { TestComponentComponent } from './testComponent/testComponent.component';
import { MyDirectiveDirective } from './my-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TestComponentComponent,
    MyDirectiveDirective
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DriverService], // service added
  bootstrap: [AppComponent]
})

export class AppModule { }
