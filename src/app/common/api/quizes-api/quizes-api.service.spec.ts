import { TestBed } from '@angular/core/testing';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, of } from 'rxjs';
import { Quiz } from './quizes-api.interface';
import { QuizesApiService } from './quizes-api.service';

describe('Service: TeacherApi', () => {
  let service: QuizesApiService;
  let dbService: NgxIndexedDBService;

  const expectedId = 12;
  const expectedQuiz: Quiz = {
    id: 0,
    name: '',
    discipline: '',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 0
  };

  const expectedTeacherCollection = [
    expectedQuiz,
    expectedQuiz,
    expectedQuiz
  ];

  const dbServiceStub = {
    getByID: (): Observable<Quiz> => of(expectedQuiz),
    add: (): Observable<number> => of(expectedId),
    getAll: (): Observable<Quiz[]> => of(expectedTeacherCollection)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuizesApiService,
        { provide: NgxIndexedDBService, useValue: dbServiceStub }
      ]
    });

    service = TestBed.inject(QuizesApiService);
    dbService = TestBed.inject(NgxIndexedDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have GET teacher from IndexedDB', () => {
  //   service.getTeacher$(0).subscribe((teacher: Teacher) => {
  //     expect(teacher).toEqual(expectedQuiz);
  //   });
  // });

  // it('should add new teacher to IndexedDB', () => {
  //   const teacher = { ...expectedQuiz, id: expectedId };
  //   service.addTeacher$(teacher).subscribe((teacherId: number) => {
  //     expect(teacherId).toEqual(expectedId);
  //   });
  // });

  // it('should get all teachers from IndexedDB', () => {
  //   service.getAllTeachers$().subscribe((teacherCollection: Teacher[]) => {
  //     expect(teacherCollection).toEqual(expectedTeacherCollection);
  //   });
  // });
});
