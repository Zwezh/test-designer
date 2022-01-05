import { ValidatorFn } from '@angular/forms';

export interface DialogData {
  message: string;
  title: string;
  type: 'primary' | 'accent';
}

export interface PromptFieldData {
  label: string;
  value: string;
  validators?: ValidatorFn[];
  errorMessages?: {
    [key: string]: string;
  };
}

export interface PromptDialogData extends DialogData {
  field: PromptFieldData;
}
