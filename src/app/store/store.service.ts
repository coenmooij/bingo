import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string {
    return localStorage.getItem(key);
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
