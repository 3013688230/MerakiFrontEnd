import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  getUbicacion(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/ubicacion');
  }
}
