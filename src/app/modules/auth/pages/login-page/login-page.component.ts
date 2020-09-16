import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Teacher } from '@appApi';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthResourcesConstants } from '../../shared';
import { LoginService } from '../../shared/services';


@Component({
  selector: 'td-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  public teacherCollection$: Observable<Array<Teacher>>;
  public teacherId: Teacher;
  public hide = true;

  public get isDisable(): boolean {
    return !this.teacherId;
  }

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.teacherCollection$ = _loginService.teacherCollection$;
    this.teacherId = null;
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
    this._router.navigate([`${AuthResourcesConstants.TEACHERS_PAGE}/${this.teacherId}`]);
  }

}
