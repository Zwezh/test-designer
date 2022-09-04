import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Topic } from '@appApi';
import { QuestionDetailsForm } from '@appModules/question/shared';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { addTopicAction, getTopicListAction, questionTopicListSelector } from '../../../../store/features/question';

import { QuestionDetailsEditorComponent } from './question-details-editor.component';


class MatDialogMock {
  open(): any {
    return {
      afterClosed: () => of()
    };
  }
}

describe('QuestionsDetailsEditorComponent', () => {
  let component: QuestionDetailsEditorComponent;
  let fixture: ComponentFixture<QuestionDetailsEditorComponent>;
  let store: MockStore;
  let dialog: MatDialog;
  let dispatchSpy;

  const router = { navigate: jasmine.createSpy('navigate') };
  const route = { snapshot: { params: { id: '12' } } };
  const actions$ = new Observable<Action>();

  const expectedTopic: Topic = {
    id: 0,
    title: 'Test topic name',
    quizId: 1
  };

  const quizId = 12;

  const categories = [
    'fillAnswer',
    'chooseSingleAnswer',
    'chooseMultipleAnswers',
    'comparisonAnswers',
    'orderAnswers'
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          RouterTestingModule,
          ReactiveFormsModule,
          MatDialogModule,
          MatCardModule,
          MatToolbarModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule,
          MatSelectModule,
          NoopAnimationsModule,
        ],
        providers: [
          provideMockStore({}),
          { provide: Actions, useValue: {} },
          provideMockActions(() => actions$),
          { provide: ActivatedRoute, useValue: route },
          { provide: MatDialog, useClass: MatDialogMock },
          { provide: Router, useValue: router }
        ],
        declarations: [QuestionDetailsEditorComponent]
      }).compileComponents();
      store = TestBed.inject(MockStore);
      store.overrideSelector(questionTopicListSelector, [expectedTopic]);
      dispatchSpy = spyOn(store, 'dispatch').and.callThrough(); // spy on the store 
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetailsEditorComponent);
    component = fixture.componentInstance;
    component.form = new QuestionDetailsForm();
    dialog = TestBed.inject(MatDialog);
    component.quizId = 12;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check input data', () => {
    const result = component.form;
    expect(result).toBeTruthy();
  });

  it('Should contain all questions\' categories', () => {
    component.questionsCategories.forEach((category) => {
      expect(categories.includes(category)).toBeTrue();
    });
    expect(component.questionsCategories.length).toBe(5);
  });

  it('Should contain right weight ranges', () => {
    for (let index = 1; index <= 10; index++) {
      expect(component.weights[index - 1]).toBe(index);
    }
    expect(component.weights.length).toBe(10);
  });

  it('Should be triggered onAddTopic', () => {
    spyOn(component, 'onAddTopic').and.callThrough();
    const nativeElement = fixture.nativeElement;
    const addTopicButton = nativeElement.querySelector('.ts-add-topic');
    addTopicButton.click();
    fixture.detectChanges();
    expect(component.onAddTopic).toHaveBeenCalled();
  });

  it('Should be opened add topic dialog', () => {
    spyOn(dialog, 'open').and.callThrough();
    component.onAddTopic();
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('Should be triggered cancel method', () => {
    spyOn(component, 'onCancel').and.callThrough();
    const nativeElement = fixture.nativeElement;
    const btn = nativeElement.querySelector('.ts-question-details-cancel-button');
    btn.click();
    fixture.detectChanges();
    expect(component.onCancel).toHaveBeenCalledWith();
  });

  it('Should be navigated back', () => {
    component.onCancel();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['../..'], { relativeTo: route });
  });

  it('Should be got topic list', () => {
    store.select(questionTopicListSelector)
      .subscribe((value: Topic[]) => {
        expect(value).toEqual([expectedTopic]);
      });
  });

  it('Should be triggered getTopicList', () => {
    spyOn(component, 'onCancel').and.callThrough();

  });

  it('Should dispatch getTopicList action', () => {
    expect(dispatchSpy).toHaveBeenCalledWith(getTopicListAction({ quizId }));
  });
});
