import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PromptDialogData } from '../../shared/dialog-data.model';

@Component({
  selector: 'td-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromptDialogComponent implements OnInit {
  field: FormControl;
  type: string;
  title: string;
  message: string;
  label: string;

  get errors(): string[] {
    return this.field.errors
      ? Object.keys(this.field.errors)
          .filter((value: string) => !!this.data.field.errorMessages[value])
          .map((value: string) => this.data.field.errorMessages[value])
      : [];
  }

  constructor(
    private dialogRef: MatDialogRef<PromptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: PromptDialogData
  ) {
    this.title = data.title || '';
    this.message = data.message || '';
    this.label = data.field?.label || '';
    this.type = data.type || 'primary';
  }

  ngOnInit(): void {
    this.initControl();
  }

  onSubmit(): void {
    this.dialogRef.close(this.field.value);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  private initControl(): void {
    const validators = this.data.field?.validators ? [...this.data.field.validators] : [Validators.required];
    this.field = new FormControl(this.data.field?.value || '', validators);
  }
}
