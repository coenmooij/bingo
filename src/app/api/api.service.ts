import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  get<Object>(resource: string, options?: {
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  }): Observable<Object> {
    return this.http.get<Object>(environment.API_URL + resource, options);
  }

  post<Object>(resource: string, body: object, options?: {
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  }): Observable<Object> {
    return this.http.post<Object>(environment.API_URL + resource, body, options);
  }

  patch<Object>(resource: string, body: object, options?: {
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  }): Observable<Object> {
    return this.http.patch<Object>(environment.API_URL + resource, body, options);
  }

  delete<Object>(resource: string, options?: {
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  }): Observable<Object> {
    return this.http.delete<Object>(environment.API_URL + resource, options);
  }
}
