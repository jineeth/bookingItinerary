import { TestBed } from '@angular/core/testing';
import { GetItineraryService } from './get-itinerary.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http'

describe('GetItineraryService', () => {
  let service: GetItineraryService;
  let httpTestingController: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule]
    });
    service = TestBed.inject(GetItineraryService);

    service = TestBed.inject(GetItineraryService);
    httpTestingController = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getFlightItinerary should use Post to submit data', () => {
    let logonData = {
      'bookingCode': '756526345',
      'FamilyName': 'shiv',


    }
    service.getFlightItinerary(logonData).subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:3000/');

    expect(testRequest.request.method).toEqual('POST');
  });

  it('#setItinerary should use set data for itinerary', () => {
    let itinerary = {
      'bookingCode': '756526345',
      'FamilyName': 'shiv',
    }
    service.setItinerary(itinerary);
    expect(service.itinerary).toEqual(itinerary);
  });

  it('#getItinerary should use to get data for itinerary', () => {
    let itinerary = {
      'bookingCode': '756526345',
      'FamilyName': 'shiv',
    }
    service.setItinerary(itinerary);
    let data = service.getItinerary();
    expect(service.itinerary).toEqual(data);
  });



});
