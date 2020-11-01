import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private readonly http: HttpClient) {}

  getInfo() {
    return this.http.get('/api/info');
  }
}
