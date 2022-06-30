import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetItineraryService {

  itinerary: any = '';
  constructor(private http: HttpClient) { }

  public getFlightItinerary(logonDetails: any): Observable<any> {

    return this.http.post('http://localhost:3000/', logonDetails);
  }

  public setItinerary(itenerary: any) {

    this.itinerary = itenerary;
  }
  public getItinerary() {

    return this.itinerary
  }

}


