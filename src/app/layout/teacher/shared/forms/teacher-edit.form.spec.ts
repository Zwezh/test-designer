import { Teacher } from '@appApi';
import { TeacherEditForm } from '.';


describe('Teacher Edit form', () => {
  const expectedTeacher: Teacher = {
    id: 12,
    position: 'Teacher',
    name: 'Joe',
    lastName: 'Doe',
    patronymic: 'Pat',
    password: 'password'
  };

  let form = new TeacherEditForm();

  beforeEach(() => {
    form.updateForm(expectedTeacher);
  })

  it('Form should be created', () => {
    expect(form).toBeTruthy();
  });


  it('position field should be valid', () => {
    expect(form.position.value).toEqual(expectedTeacher.position);
  });

  it('name field should be valid', () => {
    expect(form.name.value).toEqual(expectedTeacher.name);
  });

  it('lastName field should be valid', () => {
    expect(form.lastName.value).toEqual(expectedTeacher.lastName);
  });

  it('patronymic field should be valid', () => {
    expect(form.patronymic.value).toEqual(expectedTeacher.patronymic);
  });

  it('password field should be valid', () => {
    expect(form.password.value).toEqual(expectedTeacher.password);
  });

  it('confirmPassword field should be valid', () => {
    expect(form.password.value).toEqual(expectedTeacher.password);
  });

  it('form should be valid', () => {
    expect(form.valid).toBeTrue();
  });

  it('form should be invalid if "position" field is empty', () => {
    form.position.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should be invalid if "name" field is empty', () => {
    form.name.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should be invalid if "lastName" field is empty', () => {
    form.lastName.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should be invalid if "patronymic" field is empty', () => {
    form.patronymic.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should be invalid if "password" field is empty', () => {
    form.password.setValue(null);
    expect(form.valid).toBeFalse();
  });

  
  it('form should be invalid if "confirmPassword" field is empty', () => {
    form.confirmPassword.setValue(null);
    expect(form.valid).toBeFalse();
  });

  it('form should be invalid if "password" and "confirmPassword" fields are different', () => {
    form.confirmPassword.setValue('password1');
    expect(form.valid).toBeFalse();
  });
});