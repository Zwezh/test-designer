/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';

describe('Service: AuthGuard', () => {

  let guard: AuthGuard;
  let authService: AuthenticationService;
  const routeStub: any = { snapshot: {} };
  const routeStateStub: any = { snapshot: {}, url: '/teacher' };
  const routerStub = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthenticationService,
        { provide: Router, useValue: routerStub }]
    });

    authService = TestBed.inject(AuthenticationService);
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    expect(guard.canActivate(routeStub, routeStateStub)).toEqual(false);
    expect(routerStub.navigate).toHaveBeenCalledWith(['auth/login']);
  });

  it('should allow the authenticated user to access app', () => {
    spyOnProperty(authService, 'isLogged').and.returnValue(true);
    expect(guard.canActivate(routeStub, routeStateStub)).toEqual(true);
  });
});
