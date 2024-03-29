import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Quiz } from '@appApi';
import { QuizesEvents } from '@appModules/quizes/shared/models';
import { SearchModule } from '@appPipes/search';
import {
  getQuizListSelector,
  isLoadingQuizesSelector,
  searchQuizesAction,
  searchQuizesSelector
} from '@appStore';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { QuizesActionsComponent, QuizesListComponent, QuizesPropertiesEditorComponent } from '../../components';

import { QuizesPageComponent } from './quizes-page.component';

describe('QuizesPageComponent', () => {
  let component: QuizesPageComponent;
  let fixture: ComponentFixture<QuizesPageComponent>;
  let store: MockStore;
  let dialog: MatDialog;
  const actions$ = new Observable<Action>();

  const MATERAIL = [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule
  ];

  const expectedquiz: Quiz = {
    id: 12,
    name: 'Expected Quiz Name',
    discipline: 'Expected Quiz Discipline',
    createdDate: new Date(),
    modifiedDate: new Date(),
    teacherId: 2
  };

  const expectedQuizList: Quiz[] = [expectedquiz];
  const expectedIsLoading = false;
  const expectedSearch = 'false';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, TranslateModule.forRoot(), NoopAnimationsModule, SearchModule, MATERAIL],
        providers: [provideMockStore({}), { provide: Actions, useValue: {} }, provideMockActions(() => actions$)],
        declarations: [
          QuizesPageComponent,
          QuizesListComponent,
          QuizesActionsComponent,
          QuizesPropertiesEditorComponent
        ]
      }).compileComponents();

      store = TestBed.inject(MockStore);
      store.overrideSelector(getQuizListSelector, expectedQuizList);
      store.overrideSelector(isLoadingQuizesSelector, expectedIsLoading);
      store.overrideSelector(searchQuizesSelector, expectedSearch);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesPageComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it(' Component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Quiz list is loaded', () => {
    component.quizList$.subscribe((list: Quiz[]) => {
      expect(list).toEqual(expectedQuizList);
    });
  });

  it('Is loading should be true', () => {
    component.isLoading$.subscribe((value: boolean) => {
      expect(value).toEqual(expectedIsLoading);
    });
  });

  it('Quiz Properties Editor should be called by Add event', () => {
    spyOn(dialog, 'open').and.callThrough();
    component.onAction({ action: QuizesEvents.ADD });
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('Confirmation dialog of delete should be called by Delete event', () => {
    spyOn(dialog, 'open').and.callThrough();
    component.onAction({ action: QuizesEvents.DELETE, data: expectedquiz });
    fixture.detectChanges();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('Search action should be called by Search event', () => {
    component.onAction({ action: QuizesEvents.SEARCH });
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(searchQuizesAction({ search: undefined }));
  });
});
