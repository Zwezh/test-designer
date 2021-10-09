/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { PersistanceService } from '../persistance.service';

import { AuthGuard } from './auth.guard';

describe('Service: AuthGuard', () => {

  let guard: AuthGuard;
  let persistanceService: PersistanceService;
  const routeStub: any = { snapshot: {} };
  const routeStateStub: any = { snapshot: {}, url: '/teacher' };
  const routerStub = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        PersistanceService,
        { provide: Router, useValue: routerStub }]
    });

    persistanceService = TestBed.inject(PersistanceService);
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    expect(guard.canActivate(routeStub, routeStateStub)).toEqual(false);
    expect(routerStub.navigate).toHaveBeenCalledWith(['auth']);
  });

  it('should allow the authenticated user to access app', () => {
    spyOnProperty(persistanceService, 'get').and.returnValue(true);
    expect(guard.canActivate(routeStub, routeStateStub)).toEqual(true);
  });
});
