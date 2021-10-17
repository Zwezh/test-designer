// /* tslint:disable:no-unused-variable */

// import { inject, TestBed } from '@angular/core/testing';
// import { Teacher, TeachersApiService } from '@appApi';
// import { of } from 'rxjs';

// describe('Service: TeachersStore', () => {

//   let apiService: TeachersApiService;

//   const expectedTeacherId = 13;
//   const expectedTeacher = {
//     id: expectedTeacherId
//   } as Teacher;
//   const expectedTeacherColection = [expectedTeacher];

//   const apiServiceStub = {
//     addTeacher$: () => of(expectedTeacherId),
//     getAllTeachers$: () => of(expectedTeacherColection),
//     updateTeacher$: () => of(expectedTeacherColection),
//     getTeacher$: () => of(expectedTeacher)
//   };


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [TeachersStore, { provide: TeachersApiService, useValue: apiServiceStub }]
//     });
//     store = TestBed.inject(TeachersStore);
//     apiService = TestBed.inject(TeachersApiService);
//   });

//   it('should be created', () => {
//     expect(store).toBeTruthy();
//   });

//   it('should be create new Teacher', () => {
//     store.addTeacher$(expectedTeacher).subscribe((id: number) => {
//       expect(id).toEqual(expectedTeacherId);
//     });
//   });

//   it('should be update Teacher', () => {
//     const updatedTeacher = { ...expectedTeacher, name: 'Name' };
//     store.updateTeacher$(updatedTeacher).subscribe(() => {
//       const teacher = store.currentTeacher;
//       expect(teacher).toEqual(updatedTeacher);
//     });
//   });

//   it('should get teacher collection', () => {
//     store.getTeacherCollection$().subscribe((teacherCollection: Array<Teacher>) => {
//       expect(teacherCollection).toEqual(expectedTeacherColection);
//     });
//   });

//   it('should get current teacher', () => {
//     store.getCurrentTeacher$(expectedTeacherId).subscribe((teacher: Teacher) => {
//       expect(teacher).toEqual(expectedTeacher);
//     });
//   });
// });
