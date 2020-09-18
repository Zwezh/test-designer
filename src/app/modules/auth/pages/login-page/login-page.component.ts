import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '@appApi';
import { FADE_IN_CONTENT_BY_HEIGHT_OPACITY } from '@appConstants';
import { AuthenticationService } from '@appServices';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { AuthResourcesConstants } from '../../shared';
import { LoginService } from '../../shared/services';


@Component({
  selector: 'td-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FADE_IN_CONTENT_BY_HEIGHT_OPACITY]
})
export class LoginPageComponent implements OnInit {

  public teacherCollection$: Observable<Array<Teacher>>;
  public selectedTeacher: Teacher;
  public password: string;
  public hide = true;

  public get isDisable(): boolean {
    return !this.selectedTeacher || this.selectedTeacher?.password !== this.password;
  }
  public get isShowError(): boolean {
    return this.selectedTeacher && this.selectedTeacher.password !== this.password;
  }

  constructor(
    private _authService: AuthenticationService,
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.teacherCollection$ = _loginService.teacherCollection$;
    this.selectedTeacher = null;
  }

  ngOnInit(): void {
    this._loginService.getTeacherCollection$().pipe(take(1)).subscribe();
  }

  public trackByTeacher(index: number, teacher: Teacher): number {
    return teacher.id;
  }

  public onOpenRegistrationPage(): void {
    this._router.navigate([AuthResourcesConstants.REGISTRATION_PAGE]);
  }

  public onSignIn(): void {
    this._authService.login(this.selectedTeacher);
    this._router.navigate([AuthResourcesConstants.TEACHERS_PAGE]);
  }

}
