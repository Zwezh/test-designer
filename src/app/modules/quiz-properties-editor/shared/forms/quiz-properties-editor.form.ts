import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quiz } from '@appApi';

export class QuizPropertiesEditorForm extends FormGroup {
  public get name(): FormControl {
    return this.get('name') as FormControl;
  }

  public get discipline(): FormControl {
    return this.get('discipline') as FormControl;
  }

  public get properties(): Partial<Quiz> {
    const quiz = {
      name: this.name.value,
      discipline: this.discipline.value
    };
    return quiz;
  }

  constructor(quiz?: Partial<Quiz>) {
    super({
      name: new FormControl(quiz?.name || '', Validators.required),
      discipline: new FormControl(quiz?.discipline || '', Validators.required)
    });
  }
}
