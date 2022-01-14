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
import { RouterTestingModule } from '@angular/router/testing';
import { Topic } from '@appApi';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { questionTopicListSelector } from '../../../../store/features/question';

import { QuestionDetailsEditorComponent } from './question-details-editor.component';

describe('QuestionsDetailsEditorComponent', () => {
  let component: QuestionDetailsEditorComponent;
  let fixture: ComponentFixture<QuestionDetailsEditorComponent>;
  let store: MockStore;
  let dialog: MatDialog;
  const actions$ = new Observable<Action>();

  const expectedTopic: Topic = {
    id: 0,
    title: 'Test topic name',
    quizId: 1
  };

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
        providers: [provideMockStore({}), { provide: Actions, useValue: {} }, provideMockActions(() => actions$)],
        declarations: [QuestionDetailsEditorComponent]
      }).compileComponents();

      store = TestBed.inject(MockStore);
      store.overrideSelector(questionTopicListSelector, [expectedTopic]);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetailsEditorComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
