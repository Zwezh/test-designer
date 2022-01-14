import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '@appApi';

export class QuestionDetailsForm extends FormGroup {
  get topicId(): FormControl {
    return this.get('topicId') as FormControl;
  }

  get weight(): FormControl {
    return this.get('weight') as FormControl;
  }

  get category(): FormControl {
    return this.get('category') as FormControl;
  }

  get description(): FormControl {
    return this.get('description') as FormControl;
  }

  get questionFromForm(): Partial<Question> {
    const question = {
      topicId: this.topicId.value,
      weight: this.weight.value,
      category: this.category.value,
      description: this.description.value,
    } as Partial<Question>;
    return question;
  }

  constructor() {
    super(
      {
        topicId: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
        category: new FormControl( '', Validators.required),
        description: new FormControl( '', Validators.required),
      }
    );
  }

  updateForm(question: Question): void {
    this.patchValue({
      position: question.topicId,
      name: question.weight,
      lastName: question.category,
      patronymic: question.description,
    });
  }
}
