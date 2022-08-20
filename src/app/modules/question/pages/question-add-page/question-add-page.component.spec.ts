import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionDetailsForm } from '@appModules/question/shared';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { addQuestionAction } from '../../../../store/features/question';

import { QuestionAddPageComponent } from './question-add-page.component';

describe('QuestionAddPageComponent', () => {
  let component: QuestionAddPageComponent;
  let fixture: ComponentFixture<QuestionAddPageComponent>;
  let store: MockStore;

  const actions$ = new Observable<Action>();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), NoopAnimationsModule],
      providers: [provideMockStore({}), { provide: Actions, useValue: {} }, provideMockActions(() => actions$)],
      declarations: [QuestionAddPageComponent]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddPageComponent);
    component = fixture.componentInstance;
    spyOn(store, 'dispatch').and.callFake(() => { });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add question action should be called', () => {
    const question = new QuestionDetailsForm().getRawValue();
    component.onAddQuestion(null);
    expect(store.dispatch).toHaveBeenCalledWith(addQuestionAction({ question, quizId: null }));
    component.onAddQuestion(null);
  });
});
