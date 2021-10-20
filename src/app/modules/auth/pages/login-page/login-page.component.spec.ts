import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Teacher } from '@appApi';
import {
  authIsLoadingSelector,
  AuthState,
  authTeacherCollectionSelector,
  loginAction
} from '@appStore';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let store: MockStore;
  const actions$ = new Observable<Action>();
  let dialog: MatDialog;

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

  const initialState: AuthState = {
    isLoading: false,
    currentTeacher: expectedTeacher,
    teacherList: [],
    isLoggedIn: true
  };

  const expectedTeacherColleciton: Teacher[] = [expectedTeacher];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPageComponent],
        imports: [
          RouterTestingModule,
          TranslateModule.forRoot(),
          NoopAnimationsModule,
          FormsModule,
          MATERAIL
        ],
        providers: [
          provideMockStore({ initialState }),
          { provide: Actions, useValue: {} },
          provideMockActions(() => actions$)
        ]
      }).compileComponents();

      store = TestBed.inject(MockStore);
      store.overrideSelector(
        authTeacherCollectionSelector,
        expectedTeacherColleciton
      );
      store.overrideSelector(authIsLoadingSelector, initialState.isLoading);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
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

  it('Is loading should be true', () => {
    component.isLoading$.subscribe((value: boolean) => {
      expect(value).toEqual(initialState.isLoading);
    });
  });

  it('sign in method should dispatch login action', () => {
    component.onSignIn();
    expect(store.dispatch).toHaveBeenCalledWith(loginAction({ id: undefined }));
  });

  it('should open teacher edit dialog by onOpenRegistrationPage', () => {
    spyOn(dialog, 'open').and.callThrough();
    component.onOpenRegistrationPage();
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalled();
  });
});
