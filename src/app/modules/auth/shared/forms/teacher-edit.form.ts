import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

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

    constructor() {
        super({
            position: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            patronymic: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required),
        }, {
            validators: CustomValidators.confirmedPasswords
        });
    }
}
