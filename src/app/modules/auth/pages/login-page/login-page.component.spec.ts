import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Teacher } from '@appApi';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { LoginService } from '../../shared/services';

import { LoginPageComponent } from './login-page.component';


describe('LoginPageComponent', () => {

  function setTimeoutPromise(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let loginService: LoginService;

  const expectedTeacher: Teacher = {
    id: null,
    position: '',
    name: '',
    lastName: '',
    patronymic: '',
    password: '1'
  };

  const expectedTeacherColleciton: Array<Teacher> = [expectedTeacher];

  const loginServiceStub = {
    teacherCollection$: of(expectedTeacherColleciton),
    getTeacherCollection$: () => of(expectedTeacherColleciton)
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [{ provide: LoginService, useValue: loginServiceStub }]
    })
      .compileComponents();

    loginService = TestBed.inject(LoginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should create', () => {
    expect(component).toBeTruthy();
  });

  it('isDisable should be true', () => {
    expect(component.isDisable).toBeTruthy();
  });

  it('Hide should be true', () => {
    expect(component.hide).toBeTruthy();
  });

  it('show error should be false', () => {
    expect(component.isShowError).toBeFalsy();
  });

  it('Teacher colleciton is loaded', () => {
    component.teacherCollection$.subscribe((teacherCollection: Array<Teacher>) => {
      expect(teacherCollection).toEqual(expectedTeacherColleciton);
    });
  });
});
