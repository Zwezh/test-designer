import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Teacher } from '@appApi';

import { TeacherEditForm } from '../shared';


@Component({
  selector: 'td-create-edit-teacher',
  templateUrl: './create-edit-teacher.component.html',
  styleUrls: ['./create-edit-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditTeacherComponent {

  public form: TeacherEditForm;
  public hide: boolean;
  public isEdit: boolean;

  public get isDisable(): boolean {
    return this.form.invalid;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Teacher,
    public dialogRef: MatDialogRef<CreateEditTeacherComponent>) {
    this.hide = true;
    this.isEdit = !!data;
    this.form = new TeacherEditForm(data);
  }

  public onCloseDialog(): void {
    this.dialogRef.close();
  }

  public onSave(): void {
    const teacher = {
      position: this.form.position.value,
      name: this.form.name.value,
      lastName: this.form.lastName.value,
      patronymic: this.form.patronymic.value,
      password: this.form.password.value
    } as Teacher;
    this.dialogRef.close(teacher);
  }
}
