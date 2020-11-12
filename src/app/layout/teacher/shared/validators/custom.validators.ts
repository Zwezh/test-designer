import {
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export class CustomValidators {
  public static confirmedPasswords: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && (password.value !== confirmPassword.value)) {
      confirmPassword.setErrors({ notMathced: true });
    }
    return null;
  }
}
