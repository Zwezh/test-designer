import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Teacher } from '@appApi';
import {
  authGetCurrentTeacherSelector,
  updateCurrentTeacherAction,
  UpdateCurrentTeacherEffect
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { TeacherBase } from '../teacher-base/teacher-base';

@Component({
  selector: 'td-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['../teacher-base/teacher-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherEditComponent extends TeacherBase implements OnInit {
  private subscription: Subscription;

  constructor(
    private store: Store,
    private updateEffect: UpdateCurrentTeacherEffect,
    dialogRef: MatDialogRef<TeacherEditComponent>
  ) {
    super(dialogRef);
  }

  public ngOnInit(): void {
    this.initEffects();
    this.initSelectors();
  }

  protected onSave(): void {
    this.store.dispatch(
      updateCurrentTeacherAction({ teacher: this.form.teacherFromForm })
    );
  }

  private initSelectors(): void {
    this.subscription = this.store
      .pipe(select(authGetCurrentTeacherSelector))
      .subscribe((teacher: Teacher) => {
        this.form.updateForm(teacher);
      });
  }

  private initEffects(): void {
    // this.updateEffect.updateCurrentTeacherEffect$
    //   .pipe(take(1))
    //   .subscribe(() => {
    //     this.dialogRef.close();
    //   });
  }
}
