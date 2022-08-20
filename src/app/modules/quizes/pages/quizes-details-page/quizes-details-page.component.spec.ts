import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Quiz } from '@appApi';
import { getOneQuizSelector, isLoadingQuizesSelector, QuizModel } from '@appStore';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { QuizDetailsPageComponent } from '..';

describe('QuizDetailsPageComponent', () => {
  let component: QuizDetailsPageComponent;
  let fixture: ComponentFixture<QuizDetailsPageComponent>;
  let store: MockStore;
  let dialog: MatDialog;
  const actions$ = new Observable<Action>();

  const expectedQuiz: QuizModel = {
    id: 12,
    name: 'Expected Quiz Name',
    discipline: 'Expected Quiz Discipline',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 2,
    topicList: [],
    countOfQuestions: 0
  };

  const expectedIsLoading = false;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, TranslateModule.forRoot(), MatDialogModule],
        providers: [provideMockStore({}), { provide: Actions, useValue: {} }, provideMockActions(() => actions$)],
        declarations: [QuizDetailsPageComponent]
      }).compileComponents();

      store = TestBed.inject(MockStore);
      store.overrideSelector(getOneQuizSelector, expectedQuiz);
      store.overrideSelector(isLoadingQuizesSelector, expectedIsLoading);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailsPageComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quiz list is loaded', () => {
    component.quiz$.subscribe((quiz: Quiz) => {
      expect(quiz).toEqual(expectedQuiz);
    });
  });

  it('Is loading should be true', () => {
    component.isLoading$.subscribe((value: boolean) => {
      expect(value).toEqual(expectedIsLoading);
    });
  });
});
