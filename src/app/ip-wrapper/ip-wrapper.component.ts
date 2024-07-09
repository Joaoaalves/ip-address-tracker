import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpInfoService } from '../services/ip.service';
import { IpInfoComponent } from '../ip-info/ip-info.component';
import { CoordinatesService } from '../services/coordinates.service';

@Component({
  selector: 'app-ip-wrapper',
  standalone: true,
  imports: [CommonModule, IpInfoComponent],
  templateUrl: './ip-wrapper.component.html',
  styleUrls: ['./ip-wrapper.component.css'],
})
export class IpWrapperComponent implements OnInit {
  ip: string = '';
  data: any = null;

  constructor(private ipInfoService: IpInfoService, private coordinatesService: CoordinatesService) {}

  ngOnInit(): void {
    this.ipInfoService.getPublicIp().subscribe((response: any) => {
      this.ip = response.ipString;
      this.fetchIpInfo(this.ip);
    });
  }

  fetchIpInfo(ip: string): void {
    this.ipInfoService.getIpInfo(ip).subscribe((response: any) => {
      this.data = response;
      this.coordinatesService.updateCoordinates(response.lat, response.lon);
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const ipInput = (event.target as HTMLFormElement).elements.namedItem('ip') as HTMLInputElement;
    if (ipInput.value) {
      this.fetchIpInfo(ipInput.value);
    }
  }
}