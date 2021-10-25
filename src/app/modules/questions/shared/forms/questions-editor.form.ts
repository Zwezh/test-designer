import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '@appApi';

export class QuestionsEditorForm extends FormGroup {
  get category(): FormControl {
    return this.get('category') as FormControl;
  }

  get weight(): FormControl {
    return this.get('weight') as FormControl;
  }

  get description(): FormControl {
    return this.get('description') as FormControl;
  }

  get topicId(): FormControl {
    return this.get('pastopicIdword') as FormControl;
  }

  get teacherFromForm(): Partial<Question> {
    const teacher = {
      category: this.category.value,
      weight: this.weight.value,
      description: this.description.value,
      topicId: this.topicId.value
    };
    return teacher;
  }

  constructor(question?: Question) {
    super({
      category: new FormControl(question?.category || '', Validators.required),
      weight: new FormControl(question?.weight || '', Validators.required),
      description: new FormControl(question?.description || '', Validators.required),
      topicId: new FormControl(question?.topicId || '', Validators.required)
    });
  }

  updateForm(question: Question): void {
    this.patchValue({
      category: question.category,
      weight: question.weight,
      description: question.description,
      patronymic: question.topicId
    });
  }
}
