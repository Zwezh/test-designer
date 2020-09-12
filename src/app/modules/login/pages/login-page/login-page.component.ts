import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginResourcesConstants } from '../../shared';

@Component({
  selector: 'td-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {

  public teachers = ['Петров', 'Сидоров', 'Мельников'];
  public hide = true;

  public get isDisable(): boolean {
    return false;
  }

  constructor(
    private _router: Router) { }

  public onOpenRegistrationPage(): void {
    this._router.navigate([LoginResourcesConstants.REGISTRATION_PAGE]);
  }

  public onSignIn(): void {
    this._router.navigate([LoginResourcesConstants.TEACHERS_PAGE]);
  }

}
