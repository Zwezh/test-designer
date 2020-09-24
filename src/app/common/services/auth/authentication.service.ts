import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private _isLogged: boolean;

  public get isLogged(): boolean {
    return this._isLogged;
  }

  public get teacherId(): number {
    const teacherId = +sessionStorage.getItem('currentTeacher');
    return teacherId;
  }

  constructor() {
    const teacherId = sessionStorage.getItem('currentTeacher');
    if (teacherId !== null) {
      this._isLogged = true;
    }
  }

  public login(id: number): void {
    sessionStorage.setItem('currentTeacher', id.toString());
    this._isLogged = true;
  }

  public logout(): void {
    sessionStorage.removeItem('currentTeacher');
    this._isLogged = false;
  }
}