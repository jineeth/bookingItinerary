import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveBookingComponent } from './retrieve-booking.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, interval, of, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GetItineraryService } from '../services/get-itinerary.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RetrieveBookingComponent', () => {
  let component: RetrieveBookingComponent;
  let fixture: ComponentFixture<RetrieveBookingComponent>;
  let getItineraryService: GetItineraryService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieveBookingComponent],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        AppRoutingModule
      ],
      providers: [FormBuilder,
        HttpClient,
        HttpHandler
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveBookingComponent);
    component = fixture.componentInstance;
    getItineraryService = TestBed.inject(GetItineraryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if section1 is present', () => {

    let element = fixture.debugElement.nativeElement;
    let section1Ele = element.querySelector('#section1');
    expect(section1Ele).toBeTruthy();
  });

  it('should check if h2 is present', () => {

    let element = fixture.debugElement;
    const h2Content = element.query(By.css('h2')).nativeElement;
    expect(h2Content.textContent).toContain('RETRIEVE YOUR BOOKING');
  });

  it('should check content of para p', () => {

    let element = fixture.debugElement;
    const pContent = element.query(By.css('p')).nativeElement;
    expect(pContent.textContent).toContain('You can find your booking by filling your family name and booking code in your booking confirmation');
  });

  it('should validate familyName field', () => {

    let element = fixture.debugElement.nativeElement;
    let familyNameEle = element.querySelector('#familyName');
    expect(familyNameEle.type).toBe('text');
    expect(familyNameEle.placeholder).toEqual('Family Name')
  });


  it('should call  createlogonForm() method', () => {
    component.createlogonForm();
    expect(component.logonForm.controls['bookingCode'].value).toEqual('');
    expect(component.logonForm.controls['familyName'].value).toEqual('');


  });

  it('should call onRetrieveBooking method', () => {
    let spy = spyOn(component, 'onRetrieveBooking');
    let element = fixture.debugElement.nativeElement;
    let checkinBtn = element.querySelector('#retrieveBookingBtn');
    checkinBtn.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled;

  });


  it('should call onRetrieveBooking method', () => {
    let spy = spyOn(component, 'onRetrieveBooking');
    let element = fixture.debugElement.nativeElement;
    let retrieveBookingBtn = element.querySelector('#retrieveBookingBtn');
    retrieveBookingBtn.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled;

  });

  it('should call onRetrieveBooking and returns a positive response', () => {
    component.logonForm.controls['bookingCode'].setValue('KESPA');
    component.logonForm.controls['familyName'].setValue('AMSGHG')


    let spy = spyOn(getItineraryService, 'getFlightItinerary').and.returnValue(of([]));

    component.onRetrieveBooking();
    expect(spy).toHaveBeenCalled;
  });

  it('should call onRetrieveBooking and returns an error', () => {
    component.logonForm.controls['bookingCode'].setValue('KESPA');
    component.logonForm.controls['familyName'].setValue('AMSGHG')


    let spy = spyOn(getItineraryService, 'getFlightItinerary').and.returnValue(throwError({ status: 400 }));

    component.onRetrieveBooking();
    expect(spy).toHaveBeenCalled;
  });

});
