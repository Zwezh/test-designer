import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { registerAction } from '@appStore';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { registerSuccessAction } from 'app/store';
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
    private actions$: Actions,
    dialogRef: MatDialogRef<TeacherCreateComponent>
  ) {
    super(dialogRef);
  }

  public ngOnInit(): void {
    this.initListeners();
  }

  protected onSave(): void {
    this.store.dispatch(registerAction({ teacher: this.form.teacherFromForm }));
  }

  private initListeners(): void {
    this.actions$.pipe(ofType(registerSuccessAction), take(1)).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
