import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Teacher } from '@appApi';
import { authGetCurrentTeacherSelector, AuthState } from '@appStore';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TeacherEditComponent } from './teacher-edit.component';

describe('TeacherEditComponent', () => {
  let component: TeacherEditComponent;
  let fixture: ComponentFixture<TeacherEditComponent>;
  let store: MockStore;
  const actions$ = new Observable<Action>();
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

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TeacherEditComponent],
        imports: [StoreModule, MatDialogModule, TranslateModule.forRoot()],
        providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          { provide: Actions, useValue: {} },
          provideMockStore({ initialState }),
          provideMockActions(() => actions$)
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
      store = TestBed.inject(MockStore);
      store.overrideSelector(authGetCurrentTeacherSelector, {
        ...expectedTeacher
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditComponent);
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

  it('should be shown title', () => {
    const nativeElement = fixture.nativeElement;
    const title = nativeElement.querySelector('.ts-edit-title');
    expect(title).toBeTruthy();
  });
});
