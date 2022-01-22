import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { PersistanceKeys } from '@appConstants';

import { PersistanceService } from '../persistance.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private persistanceService: PersistanceService
  ) { }

  canActivate(): boolean {
    if (!!this.persistanceService.get(PersistanceKeys.authKey)) {
      return true;
    }
    this.router.navigate(['auth']);
    return false;
  }
}
