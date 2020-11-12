import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to sessionStorage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (error) {
      console.error('Error getting data from sessionStorage', error);
      return null;
    }
  }
}
