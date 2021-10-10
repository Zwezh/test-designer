import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quiz } from '@appApi';

export class TestsAdd extends FormGroup {
  public get name(): FormControl {
    return this.get('name') as FormControl;
  }

  public get discipline(): FormControl {
    return this.get('discipline') as FormControl;
  }

  public get quizFromForm(): Partial<Quiz> {
    const quiz = {
      name: this.name.value,
      discipline: this.discipline.value
    };
    return quiz;
  }

  constructor() {
    super({
      name: new FormControl('', Validators.required),
      discipline: new FormControl('', Validators.required)
    });
  }
}
