import { Injectable } from '@angular/core';
import { Teacher } from '@appApi';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private _teacher$: BehaviorSubject<Teacher>;

  public get teacher$(): Observable<Teacher> {
    return this._teacher$.asObservable();
  }

  constructor() {
    this._teacher$ = new BehaviorSubject<Teacher>(JSON.parse(sessionStorage.getItem('currentTeacher')));
  }

  public get currentTeacher(): Teacher {
    return this._teacher$.value;
  }

  public login(teacher: Teacher): Teacher {
    sessionStorage.setItem('currentTeacher', JSON.stringify(teacher));
    this._teacher$.next(teacher);
    return teacher;
  }

  public logout(): void {
    sessionStorage.removeItem('currentTeacher');
    this._teacher$.next(null);
  }
}