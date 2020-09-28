import { Injectable } from '@angular/core';
import { Teacher, TeachersApiService } from '@appApi';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachersStore {
  private _teacherColleciton$: BehaviorSubject<Array<Teacher>>;
  private _currentTeacher$: BehaviorSubject<Teacher>;

  public get teacherCollection$(): Observable<Array<Teacher>> {
    return this._teacherColleciton$.asObservable();
  }

  public get currentTeacher$(): Observable<Teacher> {
    return this._currentTeacher$.asObservable();
  }

  public get currentTeacher(): Teacher {
    return this._currentTeacher$.getValue();
  }

  public set currentTeacher(value: Teacher) {
    this._currentTeacher$.next(value);
  }

  constructor(private _apiService: TeachersApiService) {
    this._teacherColleciton$ = new BehaviorSubject<Array<Teacher>>(undefined);
    this._currentTeacher$ = new BehaviorSubject<Teacher>(undefined);
  }

  public addTeacher$(teacher: Teacher): Observable<number> {
    return this._apiService.addTeacher$(teacher)
      .pipe(tap((id: number) => {
        const teacherCollection = this._teacherColleciton$.getValue() || [];
        this._teacherColleciton$.next([...teacherCollection, { ...teacher, id }]);
      }));
  }

  public updateTeacher$(teacher: Teacher): Observable<Array<Teacher>> {
    return this._apiService.updateTeacher$(teacher)
      .pipe(tap((teacherCollection: Array<Teacher>) => {
        this._currentTeacher$.next({ ...teacher });
        this._teacherColleciton$.next([...teacherCollection]);
      }));
  }

  public getTeacherCollection$(): Observable<Array<Teacher>> {
    return this._teacherColleciton$.getValue() ? of(this._teacherColleciton$.getValue()) : this.loadTeacherCollectoin$();
  }

  public getCurrentTeacher$(id: number): Observable<Teacher> {
    return this._currentTeacher$.getValue() ? of(this._currentTeacher$.getValue()) : this.loadCurrentTeacher$(id);
  }

  private loadTeacherCollectoin$(): Observable<Array<Teacher>> {
    return this._apiService.getAllTeachers$()
      .pipe(tap((teacherCollection: Array<Teacher>) => this._teacherColleciton$.next(teacherCollection)));
  }

  private loadCurrentTeacher$(id: number): Observable<Teacher> {
    return this._apiService.getTeacher$(id)
      .pipe(tap((teacher: Teacher) => this._currentTeacher$.next(teacher)));
  }

}
