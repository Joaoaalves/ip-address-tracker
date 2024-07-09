import { Component, OnInit } from '@angular/core';
import { IpWrapperComponent } from './ip-wrapper/ip-wrapper.component';
import { MapComponent } from './map/map.component';
import { CoordinatesService } from './services/coordinates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [IpWrapperComponent, MapComponent],
  standalone: true
})
export class AppComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private coordinatesService: CoordinatesService) {}

  ngOnInit(): void {
    this.coordinatesService.currentLatitude.subscribe((latitude) => {
      this.latitude = latitude;
    });

    this.coordinatesService.currentLongitude.subscribe((longitude) => {
      this.longitude = longitude;
    });
  }
}
