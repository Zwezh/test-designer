/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { Teacher } from '@appApi';

import { AuthenticationService } from './authentication.service';

describe('Service: Auth', () => {

  let service: AuthenticationService;

  const sessionStorageKey = 'currentTeacher';
  const expectedTeacher = {
    id: 12
  } as Teacher;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
    service = TestBed.inject(AuthenticationService);
  });

  afterEach(() => {
    sessionStorage.removeItem(sessionStorageKey);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be unauthenticated by default', () => {
    const loggedUser = service.currentTeacher;
    expect(loggedUser).toBeFalsy();
  });

  it('should be login', () => {
    service.login(expectedTeacher);
    const loggedUser = service.currentTeacher;
    expect(loggedUser.id).toEqual(expectedTeacher.id);
  });

  it('should be logout', () => {
    service.login(expectedTeacher);
    service.logout();
    const loggedUser = service.currentTeacher;
    expect(loggedUser).toBeFalsy();
  });

});
