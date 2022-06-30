import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GetItineraryService } from '../services/get-itinerary.service';

@Component({
  selector: 'app-retrieve-booking',
  templateUrl: './retrieve-booking.component.html',
  styleUrls: ['./retrieve-booking.component.scss']
})
export class RetrieveBookingComponent implements OnInit {

  showError: boolean = false;
  errorMessage: string = '';
  logonForm: FormGroup = new FormGroup({})
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private fb: FormBuilder, private router: Router, public getItineraryService: GetItineraryService) {
  }

  ngOnInit() {
    this.createlogonForm();
  }
  createlogonForm() {
    this.logonForm = this.fb.group({
      bookingCode: ['', [Validators.required, Validators.pattern(/^(?:[a-zA-Z2-9]+)?$/), Validators.minLength(5), Validators.maxLength(6)]],
      familyName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],

    });
  }
  onRetrieveBooking() {
    if (!this.logonForm.valid) {
      return
    }

    this.showError = false;

    this.getItineraryService.getFlightItinerary(this.logonForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.getItineraryService.setItinerary(res);
          this.router.navigate(['/flight']);
          console.log(res)
        },
        error: (error: any) => {
          console.log(error);
          this.showError = true;
          this.setErrorMessage(error);

        }
      });

  }

  setErrorMessage(error: any): void {
    switch (error.status) {
      case 400: {
        this.errorMessage = error?.error?.message;
        break;
      }
      case 403: {
        this.errorMessage = error?.error?.message;
        break;
      }
      case 500: {
        this.errorMessage = error?.error?.message;
        break;
      }
      default: {
        this.errorMessage = 'Unknown Error, Please try later ';
        break;
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
