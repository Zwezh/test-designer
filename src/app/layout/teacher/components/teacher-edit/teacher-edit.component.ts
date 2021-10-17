import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Teacher } from '@appApi';
import {
  authGetCurrentTeacherSelector,
  updateCurrentTeacherAction,
} from '@appStore';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { updateCurrentTeacherSuccessAction } from 'app/store';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { TeacherBase } from '../teacher-base/teacher-base';

@Component({
  selector: 'td-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['../teacher-base/teacher-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherEditComponent extends TeacherBase implements OnInit, OnDestroy {
  private teaherId: number;
  private subscription: Subscription;

  constructor(
    private store: Store,
    private actions$: Actions,
    dialogRef: MatDialogRef<TeacherEditComponent>
  ) {
    super(dialogRef);
  }

  public ngOnInit(): void {
    this.initListeners();
    this.initSelectors();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected onSave(): void {
    const teacher = { ...this.form.teacherFromForm, id: this.teaherId };
    this.store.dispatch(updateCurrentTeacherAction({ teacher }));
  }

  private initSelectors(): void {
    this.subscription = this.store
      .pipe(select(authGetCurrentTeacherSelector))
      .subscribe((teacher: Teacher) => {
        this.teaherId = teacher?.id;
        this.form.updateForm(teacher);
      });
  }

  private initListeners(): void {
    this.actions$
      .pipe(ofType(updateCurrentTeacherSuccessAction), take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
