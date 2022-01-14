import { Injectable } from '@angular/core';
import { StoreNamesConstants } from 'app/db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Teacher } from './teachers-api.interface';

@Injectable()
export class TeachersApiService {
  constructor(private dbService: NgxIndexedDBService) {}

  addTeacher$(teacher: Teacher): Observable<number> {
    return this.dbService.add(StoreNamesConstants.TEACHERS_STORE, teacher).pipe(map((res: Teacher) => res.id));
  }

  updateTeacher$(teacher: Teacher): Observable<Teacher> {
    return this.dbService
      .update(StoreNamesConstants.TEACHERS_STORE, teacher)
      .pipe(map((teacherList: Teacher[]) => teacherList.find((t: Teacher) => t.id === teacher.id)));
  }

  getAllTeachers$(): Observable<Teacher[]> {
    return this.dbService.getAll(StoreNamesConstants.TEACHERS_STORE);
  }

  getTeacher$(id: number): Observable<Teacher> {
    return this.dbService.getByID(StoreNamesConstants.TEACHERS_STORE, id);
  }
}
