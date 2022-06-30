import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBookingComponent } from './display-booking.component';
import { GetItineraryService } from '../services/get-itinerary.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, interval, of, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
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
describe('DisplayBookingComponent', () => {
  let component: DisplayBookingComponent;
  let fixture: ComponentFixture<DisplayBookingComponent>;
  let getItineraryService: GetItineraryService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBookingComponent ],
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
    fixture = TestBed.createComponent(DisplayBookingComponent);
    component = fixture.componentInstance;
    getItineraryService = TestBed.inject(GetItineraryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
