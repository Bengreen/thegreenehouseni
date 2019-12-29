import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { DirectionsComponent } from './directions/directions.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
