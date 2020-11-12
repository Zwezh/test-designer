import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { registerAction, RegisterEffect } from '@appStore';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { TeacherBase } from '../teacher-base/teacher-base';

@Component({
  selector: 'td-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['../teacher-base/teacher-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherCreateComponent extends TeacherBase implements OnInit {
  constructor(
    private store: Store,
    private registerEffect: RegisterEffect,
    dialogRef: MatDialogRef<TeacherCreateComponent>
  ) {
    super(dialogRef);
  }

  public ngOnInit(): void {
    this.registerEffect.register$.pipe(take(1)).subscribe(() => {
      this.dialogRef.close();
    });
  }

  protected onSave(): void {
    this.store.dispatch(registerAction({ teacher: this.form.teacherFromForm }));
  }
}
