import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuizesPropertiesEditorForm } from '@appModules/quizes/shared/forms';
import { QuizesPropertiesEditorData } from '@appModules/quizes/shared/models';

@Component({
  templateUrl: './quizes-properties-editor.component.html',
  styleUrls: ['./quizes-properties-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesPropertiesEditorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<QuizesPropertiesEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuizesPropertiesEditorData
  ) {}

  form: QuizesPropertiesEditorForm;

  ngOnInit(): void {
    this.form = new QuizesPropertiesEditorForm(this.data.quiz);
  }

  onSave(): void {
    this.dialogRef.close(this.form.properties);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
