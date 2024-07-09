import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { IpWrapperComponent } from './ip-wrapper/ip-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, IpWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}