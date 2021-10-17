import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '@appApi';

import { CustomValidators } from '../validators';

export class TeacherEditForm extends FormGroup {
  get position(): FormControl {
    return this.get('position') as FormControl;
  }

  get lastName(): FormControl {
    return this.get('lastName') as FormControl;
  }

  get name(): FormControl {
    return this.get('name') as FormControl;
  }

  get patronymic(): FormControl {
    return this.get('patronymic') as FormControl;
  }

  get password(): FormControl {
    return this.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.get('confirmPassword') as FormControl;
  }

  get teacherFromForm(): Teacher {
    const teacher = {
      position: this.position.value,
      name: this.name.value,
      lastName: this.lastName.value,
      patronymic: this.patronymic.value,
      password: this.password.value
    } as Teacher;
    return teacher;
  }

  constructor(teacher?: Teacher) {
    super(
      {
        position: new FormControl(teacher?.position || '', Validators.required),
        lastName: new FormControl(teacher?.lastName || '', Validators.required),
        name: new FormControl(teacher?.name || '', Validators.required),
        patronymic: new FormControl(
          teacher?.patronymic || '',
          Validators.required
        ),
        password: new FormControl(teacher?.password || '', Validators.required),
        confirmPassword: new FormControl(
          teacher?.password || '',
          Validators.required
        )
      },
      {
        validators: CustomValidators.confirmedPasswords
      }
    );
  }

  updateForm(teacher: Teacher): void {
    this.patchValue({
      position: teacher.position,
      name: teacher.name,
      lastName: teacher.lastName,
      patronymic: teacher.patronymic,
      password: teacher.password,
      confirmPassword: teacher.password
    });
  }
}
