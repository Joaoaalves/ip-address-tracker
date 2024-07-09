import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {
  private latitudeSource = new BehaviorSubject<number>(0);
  private longitudeSource = new BehaviorSubject<number>(0);

  currentLatitude = this.latitudeSource.asObservable();
  currentLongitude = this.longitudeSource.asObservable();

  updateCoordinates(latitude: number, longitude: number) {
    this.latitudeSource.next(latitude);
    this.longitudeSource.next(longitude);
  }
}