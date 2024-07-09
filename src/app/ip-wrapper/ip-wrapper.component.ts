import { Component } from '@angular/core';
import { IpInfoComponent } from '../ip-info/ip-info.component';
@Component({
  selector: 'app-ip-wrapper',
  standalone: true,
  imports: [IpInfoComponent],
  templateUrl: './ip-wrapper.component.html',
  styleUrl: './ip-wrapper.component.css'
})
export class IpWrapperComponent {

}
