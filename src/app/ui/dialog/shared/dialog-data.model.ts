import { ValidatorFn } from '@angular/forms';

export interface DialogData {
  message: string;
  title: string;
  type: 'primary' | 'accent';
}

export interface PromptDialogData extends DialogData {
  field: {
    label: string;
    value: string;
    validators: ValidatorFn[];
  };
}
