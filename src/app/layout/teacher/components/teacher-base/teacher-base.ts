import { MatDialogRef } from '@angular/material/dialog';
import { TeacherEditForm } from '@appLayouts/teacher/shared';
import {
  TeacherAction,
  TeacherActions
} from '@appLayouts/teacher/shared/types';

export abstract class TeacherBase {
  form: TeacherEditForm;

  constructor(protected dialogRef: MatDialogRef<TeacherBase>) {
    this.form = new TeacherEditForm();
  }

  onAction(event: TeacherAction): void {
    if (event === TeacherActions.cancel) {
      this.dialogRef.close();
    } else {
      this.onSave();
    }
  }

  protected abstract onSave(): void;
}
