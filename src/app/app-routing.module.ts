import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrieveBookingComponent } from './retrieve-booking/retrieve-booking.component';
import { DisplayBookingComponent } from './display-booking/display-booking.component';

const routes: Routes = [
  {
    path: 'getbooking',
    component: RetrieveBookingComponent
  },
  {
    path: 'flight',
    component: DisplayBookingComponent
  },
  { path: '', redirectTo: '/getbooking', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
