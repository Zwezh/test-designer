import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { QuestionDetailsForm } from '@appModules/question/shared';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { getQuestionAction, updateQuestionAction } from 'app/store/features/question';
import { Observable } from 'rxjs';

import { QuestionEditPageComponent } from './question-edit-page.component';

describe('QuestionEditPageComponent', () => {
  let component: QuestionEditPageComponent;
  let fixture: ComponentFixture<QuestionEditPageComponent>;
  let store: MockStore;
  const route = { snapshot: { paramMap: {
    get: (id) => 12
  } } };

  const actions$ = new Observable<Action>();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), NoopAnimationsModule],
      providers: [
        provideMockStore({}),
        { provide: Actions, useValue: {} },
        provideMockActions(() => actions$),
        { provide: ActivatedRoute, useValue: route },
      ],
      declarations: [QuestionEditPageComponent]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditPageComponent);
    component = fixture.componentInstance;
    spyOn(store, 'dispatch').and.callFake(() => { });
    fixture.detectChanges();
  });

  it('Component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Update question action should be called', () => {
    const question = new QuestionDetailsForm().getRawValue();
    component.onChangeQuestion();
    expect(store.dispatch).toHaveBeenCalledWith(updateQuestionAction({ question }));
  });

  it('Get question action should be called', () => {
    expect(store.dispatch).toHaveBeenCalledWith(getQuestionAction({ questionId: 12 }));
  });
});
