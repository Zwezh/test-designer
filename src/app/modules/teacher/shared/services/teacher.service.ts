import { Injectable } from '@angular/core';
// import { Teacher, TeachersApiService } from '@appApi';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { tap } from 'rxjs/operators';

@Injectable()
export class TeacherService {

  // private _teacher$: BehaviorSubject<Teacher>;

  // public get teacher$(): Observable<Teacher> {
  //   return this._teacher$.asObservable();
  // }

  // constructor(private _apiService: TeachersApiService) {
  //   this._teacher$ = new BehaviorSubject<Teacher>(undefined);
  // }

  // public getTeacher$(id: number): Observable<Teacher> {
  //   const teacher = this._teacher$.getValue();
  //   return (teacher && id === teacher?.id) ? of(teacher) : this.loadTeacher$(id);
  // }

  // private loadTeacher$(id: number): Observable<Teacher> {
  //   return this._apiService.getTeacher$(id)
  //     .pipe(tap((teacher: Teacher) => this._teacher$.next(teacher)));
  // }
}
