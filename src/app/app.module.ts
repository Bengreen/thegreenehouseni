import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { DirectionsComponent } from './directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    HomeComponent,
    AboutUsComponent,
    ThingsToDoComponent,
    DirectionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
