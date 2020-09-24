import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Teacher } from '@appApi';

import { CustomValidators } from '../validators';


export class TeacherEditForm extends FormGroup {

    public get position(): FormControl {
        return this.get('position') as FormControl;
    }

    public get lastName(): FormControl {
        return this.get('lastName') as FormControl;
    }

    public get name(): FormControl {
        return this.get('name') as FormControl;
    }

    public get patronymic(): FormControl {
        return this.get('patronymic') as FormControl;
    }

    public get password(): FormControl {
        return this.get('password') as FormControl;
    }

    public get confirmPassword(): FormControl {
        return this.get('confirmPassword') as FormControl;
    }

    constructor(teacher?: Teacher) {
        super({
            position: new FormControl(teacher?.position || '', Validators.required),
            lastName: new FormControl(teacher?.lastName || '', Validators.required),
            name: new FormControl(teacher?.name || '', Validators.required),
            patronymic: new FormControl(teacher?.patronymic || '', Validators.required),
            password: new FormControl(teacher?.password || '', Validators.required),
            confirmPassword: new FormControl(teacher?.password || '', Validators.required),
        }, {
            validators: CustomValidators.confirmedPasswords
        });
    }
}
