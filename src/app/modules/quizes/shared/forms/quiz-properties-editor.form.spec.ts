import { Quiz } from '@appApi';

import { QuizesPropertiesEditorForm } from './quizes-properties-editor.form';

describe('Quiz Properties Editor Form', () => {
  const expectedQuiz: Partial<Quiz> = {
    name: 'Joe',
    discipline: 'History'
  };

  let form = new QuizesPropertiesEditorForm(expectedQuiz);

  beforeEach(() => {
    form = new QuizesPropertiesEditorForm(expectedQuiz);
  });

  it('Form should be created', () => {
    expect(form).toBeTruthy();
  });

  it('name field should be valid', () => {
    expect(form.name.value).toEqual(expectedQuiz.name);
  });

  it('discipline field should be valid', () => {
    expect(form.discipline.value).toEqual(expectedQuiz.discipline);
  });

  it('form should be valid', () => {
    expect(form.valid).toBeTrue();
  });

  it('form should be invalid if "name" field is empty', () => {
    form.name.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should be invalid if "discipline" field is empty', () => {
    form.discipline.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should get expetcted properties ', () => {
    expect(form.properties).toEqual(expectedQuiz);
  });
});
