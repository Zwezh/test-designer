import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TestsAdd } from '../../shared/forms';

@Component({
  selector: 'td-tests-add-dialog',
  templateUrl: './tests-add-dialog.component.html',
  styleUrls: ['./tests-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsAddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestsAddDialogComponent>) { }

  public form: TestsAdd;

  public ngOnInit() {
    this.form = new TestsAdd();
  }

  public onSave(): void {
    this.dialogRef.close({ quiz: this.form.quizFromForm });

  }

  public onCancel(): void {
    this.dialogRef.close();
  }
}
