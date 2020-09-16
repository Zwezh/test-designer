import { Injectable } from '@angular/core';
import { Teacher, TeachersApiService } from '@appApi';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private _teacherColleciton$: BehaviorSubject<Array<Teacher>>;

  public get teacherCollection$(): Observable<Array<Teacher>> {
    return this._teacherColleciton$.asObservable();
  }

  constructor(private _apiService: TeachersApiService) {
    this._teacherColleciton$ = new BehaviorSubject<Array<Teacher>>(undefined);
  }

  public addTeacher$(teacher: Teacher): Observable<number> {
    return this._apiService.addTeacher$(teacher)
      .pipe(tap((id: number) => {
        const teacherCollection = this._teacherColleciton$.getValue();
        this._teacherColleciton$.next([...teacherCollection, { ...teacher, id }]);
      }));
  }

  public getTeacherCollection$(): Observable<Array<Teacher>> {
    return this._teacherColleciton$.getValue() ? of(this._teacherColleciton$.getValue()) : this.loadTeacherCollectoin$();
  }

  private loadTeacherCollectoin$(): Observable<Array<Teacher>> {
    return this._apiService.getAllTeachers$()
      .pipe(tap((teacherCollection: Array<Teacher>) => this._teacherColleciton$.next(teacherCollection)));
  }
}
