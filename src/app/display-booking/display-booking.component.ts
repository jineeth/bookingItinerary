import { Component, OnInit } from '@angular/core';
import { GetItineraryService } from '../services/get-itinerary.service';

@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.scss']
})
export class DisplayBookingComponent implements OnInit {

  itineraryObj : any = {};

  constructor(public getItineraryService : GetItineraryService) { }

  ngOnInit(): void {
    
    this.itineraryObj = this.getItineraryService.getItinerary();
    
  }
  
}
