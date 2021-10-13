import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuizPropertiesEditorForm } from '../../shared/forms/quiz-properties-editor.form';
import { QuizPropertiesEditorData } from '../../shared/quiz-properties-editor.model';

@Component({
  templateUrl: './quiz-properties-editor.component.html',
  styleUrls: ['./quiz-properties-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizPropertiesEditorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QuizPropertiesEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuizPropertiesEditorData
  ) {
  }

  public form: QuizPropertiesEditorForm;

  public ngOnInit() {
    console.info(this.data);
    this.form = new QuizPropertiesEditorForm(this.data.quiz);
  }

  public onSave(): void {
    this.dialogRef.close(this.form.properties);

  }

  public onCancel(): void {
    this.dialogRef.close();
  }
}
