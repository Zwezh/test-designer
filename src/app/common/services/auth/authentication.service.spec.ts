/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';


// describe('Service: Auth', () => {

//   let service: AuthenticationService;

//   const sessionStorageKey = 'currentTeacher';
//   const expectedId = 12;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [AuthenticationService]
//     });
//     service = TestBed.inject(AuthenticationService);
//   });

//   afterEach(() => {
//     sessionStorage.removeItem(sessionStorageKey);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should be unauthenticated by default', () => {
//     const isLogged = service.isLogged;
//     expect(isLogged).toBeFalsy();
//   });

//   it('should be login', () => {
//     service.login(expectedId);
//     const isLogged = service.isLogged;
//     expect(isLogged).toBeTruthy();
//   });

//   it('should be get current user id', () => {
//     service.login(expectedId);
//     const teacherId = service.teacherId;
//     expect(teacherId).toEqual(expectedId);
//   });

//   it('should be logout', () => {
//     service.login(expectedId);
//     service.logout();
//     const loggedUser = service.isLogged;
//     expect(loggedUser).toBeFalsy();
//   });

// });
