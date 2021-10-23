import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Teacher } from '@appApi';
import { AuthState } from '@appStore';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TeacherCreateComponent } from './teacher-create.component';

describe('TeacherCreateComponent', () => {
  let component: TeacherCreateComponent;
  let fixture: ComponentFixture<TeacherCreateComponent>;
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
        declarations: [TeacherCreateComponent],
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
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCreateComponent);
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
    const title = nativeElement.querySelector('.ts-registration-title');
    expect(title).toBeTruthy();
  });
});
