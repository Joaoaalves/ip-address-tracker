import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css'],
})
export class IpInfoComponent {
  @Input() data: any;

}