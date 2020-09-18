import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LoginService } from '../../shared/services';

import { RegistrationPageComponent } from './registration-page.component';


describe('RegistrationComponent', () => {

  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;
  let loginService: LoginService;

  const loginServiceStub = {};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPageComponent],
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
    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should create form', () => {
    const form = component.form;
    expect(form).toBeTruthy();
  });

  it('Should isDisable be true', () => {
    expect(component.isDisable).toBeTruthy();
  });
});
