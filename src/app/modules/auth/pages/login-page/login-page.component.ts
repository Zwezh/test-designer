import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Teacher } from '@appApi';
import { FADE_IN_CONTENT_BY_HEIGHT_OPACITY } from '@appConstants';
import { TeacherCreateComponent } from '@appLayouts/teacher';
import {
  authIsLoadingSelector,
  authTeacherCollectionSelector,
  getTeacherCollectionAction,
  loginAction
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'td-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FADE_IN_CONTENT_BY_HEIGHT_OPACITY]
})
export class LoginPageComponent implements OnInit {
  public teacherCollection$: Observable<Teacher[] | null>;
  public isLoading$: Observable<boolean>;
  public selectedTeacher: Teacher;
  public password: string;
  public hide = true;

  public get isDisable(): boolean {
    return (
      !this.selectedTeacher || this.selectedTeacher?.password !== this.password
    );
  }

  public get isShowError(): boolean {
    return (
      this.selectedTeacher && this.selectedTeacher.password !== this.password
    );
  }

  constructor(
    private store: Store,
    private dialog: MatDialog,
  ) {
    this.selectedTeacher = null;
  }

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  public trackByTeacher(index: number, teacher: Teacher): number {
    return teacher.id;
  }

  public onOpenRegistrationPage(): void {
    this.dialog
      .open(TeacherCreateComponent, {
        width: '550px'
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe();
  }

  public onSignIn(): void {
    this.store.dispatch(loginAction({ id: this.selectedTeacher?.id }));
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(authIsLoadingSelector));
    this.teacherCollection$ = this.store.pipe(
      select(authTeacherCollectionSelector)
    );
  }

  private initData(): void {
    this.store.dispatch(getTeacherCollectionAction());
  }
}
