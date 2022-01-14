import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static required(): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      const hasValue = !!control.value.toString().trim();
      const error = hasValue ? null : { required: true };
      return error;
    };
  }

  static confirmedPasswords: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ notMathced: true });
    }
    return null;
  }

  static uniqueNameValidator(existNames: string[]): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      const value = control.value as string;
      const isNonValid = existNames.includes(value.trim());
      return isNonValid ? { notUnique: true } : null;
    };
  }
}
