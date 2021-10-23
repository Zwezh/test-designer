import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Teacher } from '@appApi';
import { TeacherModule } from '@appLayouts/teacher';
import { TeacherBarModule } from '@appLayouts/teacher-bar';
import {
  AppState,
  authGetCurrentTeacherSelector,
  authIsLoggedInSelector,
  AuthState,
  logoutAction
} from '@appStore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';

class MatDialogMock {
  open(): any {
    return {
      afterClosed: () => of()
    };
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<AppState>;
  let dialog: MatDialog;
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

  let mockCurrentTeacherSelector;
  let mockIsLoggedInSelector;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        imports: [
          TranslateModule.forRoot(),
          RouterTestingModule,
          MatToolbarModule,
          MatDialogModule,
          CommonModule,
          MatCardModule,
          TeacherBarModule,
          NoopAnimationsModule,
          TeacherModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([])
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          provideMockStore({ initialState }),
          {
            provide: MatDialog,
            useClass: MatDialogMock
          }
        ]
      }).compileComponents();

      store = TestBed.inject(MockStore);
      mockCurrentTeacherSelector = store.overrideSelector(
        authGetCurrentTeacherSelector,
        { ...expectedTeacher }
      );
      mockIsLoggedInSelector = store.overrideSelector(
        authIsLoggedInSelector,
        true
      );
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  });

  it('Component should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Check application's title`, () => {
    const element: HTMLElement = fixture.nativeElement;
    const title = element.querySelector('h1');
    expect(title).toBeTruthy();
  });

  it('sign out method should dispatch logout action', () => {
    component.onSignOut();
    expect(store.dispatch).toHaveBeenCalledWith(logoutAction());
  });

  it('should open teacher edit dialog', () => {
    spyOn(dialog, 'open').and.callThrough();
    component.onEditTeacher();
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalled();
  });
});
