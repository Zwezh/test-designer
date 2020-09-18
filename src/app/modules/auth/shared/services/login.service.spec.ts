/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { Teacher, TeachersApiService } from '@appApi';
import { of } from 'rxjs';

import { LoginService } from './login.service';

describe('Service: Login', () => {

  let service: LoginService;
  let apiService: TeachersApiService;

  const expectedTeacherId = 13;
  const expectedTeacher = {
    id: expectedTeacherId
  } as Teacher;
  const expectedTeacherColection = [expectedTeacher];

  const apiServiceStub = {
    addTeacher$: () => of(expectedTeacherId),
    getAllTeachers$: () => of(expectedTeacherColection)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, { provide: TeachersApiService, useValue: apiServiceStub }]
    });
    service = TestBed.inject(LoginService);
    apiService = TestBed.inject(TeachersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be create new Teacher', () => {
    service.addTeacher$(expectedTeacher).subscribe((id: number) => {
      expect(id).toEqual(expectedTeacherId);
    });
  });


  it('should get teacher collection', () => {
    service.getTeacherCollection$().subscribe((teacherCollection: Array<Teacher>) => {
      expect(teacherCollection).toEqual(expectedTeacherColection);
    });
  });
});
