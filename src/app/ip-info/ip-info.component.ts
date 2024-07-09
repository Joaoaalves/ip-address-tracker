import { Component } from '@angular/core';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  imports: [],
  templateUrl: './ip-info.component.html',
  styleUrl: './ip-info.component.css',
})
export class IpInfoComponent {
  data = {
    ip_address: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timezone: "UTC-05:00",
    isp: "SpaceX Starlink"
  }
}
