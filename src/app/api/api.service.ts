import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  get<Object>(resource: string): Observable<Object> {
    return this.http.get<Object>(environment.API_URL + resource);
  }

  post<Object>(resource: string, body: object): Observable<Object> {
    return this.http.post<Object>(environment.API_URL + resource, body);
  }

  patch<Object>(resource: string, body: object): Observable<Object> {
    return this.http.patch<Object>(environment.API_URL + resource, body);
  }

  delete<Object>(resource: string): Observable<Object> {
    return this.http.delete<Object>(environment.API_URL + resource);
  }
}
