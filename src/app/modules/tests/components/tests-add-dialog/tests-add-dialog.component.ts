import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestsAdd } from '../../shared/forms';
import { TestsDialogData } from '../../shared/models';

@Component({
  templateUrl: './tests-add-dialog.component.html',
  styleUrls: ['./tests-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TestsAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestsDialogData
  ) {
  }

  public form: TestsAdd;

  public ngOnInit() {
    this.form = new TestsAdd(this.data.quiz);
  }

  public onSave(): void {
    this.dialogRef.close({ quiz: this.form.quizFromForm });

  }

  public onCancel(): void {
    this.dialogRef.close();
  }
}
