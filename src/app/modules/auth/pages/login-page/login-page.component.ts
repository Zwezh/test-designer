import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Teacher } from '@appApi';
import { FADE_IN_CONTENT_BY_HEIGHT_OPACITY } from '@appConstants';
import { CreateEditTeacherComponent } from '@appLayouts/create-edit-teacher';
import { AuthenticationService } from '@appServices';
import { TeachersStore } from '@appStores';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

import { AuthResourcesConstants } from '../../shared';

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
    private _store: TeachersStore,
    private _router: Router,
    private _dialog: MatDialog) {
    this.teacherCollection$ = _store.teacherCollection$;
    this.selectedTeacher = null;
  }

  ngOnInit(): void {
    this._store.getTeacherCollection$().pipe(take(1)).subscribe();
    if (this._authService.isLogged) {
      this._router.navigate([AuthResourcesConstants.TEACHERS_PAGE]);
    }
  }

  public trackByTeacher(index: number, teacher: Teacher): number {
    return teacher.id;
  }

  public onOpenRegistrationPage(): void {
    this._dialog.open(CreateEditTeacherComponent, {
      width: '550px',
      data: this._store.currentTeacher
    }).afterClosed()
      .pipe(
        take(1),
        filter((teacher: Teacher) => !!teacher),
        switchMap((teacher: Teacher) => this._store.addTeacher$(teacher)))
      .subscribe();
  }

  public onSignIn(): void {
    this._store.getCurrentTeacher$(this.selectedTeacher.id)
      .pipe(take(1))
      .subscribe();
    this._authService.login(this.selectedTeacher.id);
    this._router.navigate([AuthResourcesConstants.TEACHERS_PAGE]);
  }

}
