import { TestBed } from '@angular/core/testing';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';

import { Teacher } from './teachers-api.interface';
import { TeachersApiService } from './teachers-api.service';

describe('Service: TeacherApi', () => {
  let service: TeachersApiService;

  const expectedId = 12;
  const expectedTeacher: Teacher = {
    id: 0,
    position: 'Преподаватель',
    name: '',
    lastName: '',
    patronymic: '',
    password: ''
  };

  const expectedTeacherCollection = [
    expectedTeacher,
    expectedTeacher,
    expectedTeacher
  ];

  const dbServiceStub = {
    getByID: (): Observable<Teacher> => of(expectedTeacher),
    add: (): Observable<number> => of(expectedId),
    getAll: (): Observable<Teacher[]> => of(expectedTeacherCollection)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeachersApiService,
        { provide: NgxIndexedDBService, useValue: dbServiceStub }
      ]
    });

    service = TestBed.inject(TeachersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have GET teacher from IndexedDB', () => {
    service.getTeacher$(0).subscribe((teacher: Teacher) => {
      expect(teacher).toEqual(expectedTeacher);
    });
  });

  it('should add new teacher to IndexedDB', () => {
    const teacher = { ...expectedTeacher, id: expectedId };
    service.addTeacher$(teacher).subscribe((teacherId: number) => {
      expect(teacherId).toEqual(expectedId);
    });
  });

  it('should get all teachers from IndexedDB', () => {
    service.getAllTeachers$().subscribe((teacherCollection: Teacher[]) => {
      expect(teacherCollection).toEqual(expectedTeacherCollection);
    });
  });
});
