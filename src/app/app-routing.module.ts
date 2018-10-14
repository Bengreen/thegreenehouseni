import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { DirectionsComponent } from './directions/directions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'thingstodo',
    component: ThingsToDoComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'directions',
    component: DirectionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
