import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Teacher } from '@appApi';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { LoginPageComponent } from './login-page.component';


describe('LoginPageComponent', () => {

  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  // let store: any;

  const MATERAIL = [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule
  ];

  const expectedTeacher: Teacher = {
    id: null,
    position: '',
    name: '',
    lastName: '',
    patronymic: '',
    password: '1'
  };

  const expectedTeacherColleciton: Teacher[] = [expectedTeacher];

  const storeStub = {
    teacherCollection$: of(expectedTeacherColleciton),
    getTeacherCollection$: () => of(expectedTeacherColleciton)
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
        MATERAIL
      ],
      // providers: [{ provide: TeachersStore, useValue: storeStub }]
    })
      .compileComponents();

    // store = TestBed.inject(TeachersStore);
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
    component.teacherCollection$.subscribe((teacherCollection: Teacher[]) => {
      expect(teacherCollection).toEqual(expectedTeacherColleciton);
    });
  });
});
