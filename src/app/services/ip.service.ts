import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpInfoService {
  private apiUrl = 'https://api.bigdatacloud.net/data/client-ip';
  private ipInfoProxyUrl = 'https://corsproxy.io/?url=http://ip-api.com/json/';

  constructor(private http: HttpClient) {}

  getPublicIp(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getIpInfo(ip: string): Observable<any> {
    return this.http.get(`${this.ipInfoProxyUrl}${ip}`);
  }
}
