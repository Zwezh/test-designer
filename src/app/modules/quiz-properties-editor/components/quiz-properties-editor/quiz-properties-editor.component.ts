import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { QuizPropertiesEditorForm } from '../../shared/forms';
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
  ) {}

  form: QuizPropertiesEditorForm;

  ngOnInit(): void {
    this.form = new QuizPropertiesEditorForm(this.data.quiz);
  }

  onSave(): void {
    this.dialogRef.close(this.form.properties);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
