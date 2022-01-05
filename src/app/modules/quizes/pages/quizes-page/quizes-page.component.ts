import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Quiz } from '@appApi';
import {
  addQuizAction,
  deleteQuizAction,
  getQuizListAction,
  getQuizListSelector,
  isLoadingQuizesSelector,
  searchQuizesAction,
  searchQuizesSelector
} from '@appStore';
import { ConfirmationDialogComponent } from '@appUI/dialog';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, take, takeWhile } from 'rxjs';

import { QuizesPropertiesEditorComponent } from '../../components';
import { QuizesEventEmmited, QuizesEvents } from '../../shared/models';

@Component({
  templateUrl: './quizes-page.component.html',
  styleUrls: ['./quizes-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesPageComponent implements OnInit {
  quizList$: Observable<Quiz[] | null>;
  isLoading$: Observable<boolean>;
  search: string;

  private alive = true;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private translator: TranslateService
  ) {}

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  onAction({ action, data }: QuizesEventEmmited): void {
    switch (action) {
      case QuizesEvents.SEARCH:
        this.onSearch(data as string);
        break;
      case QuizesEvents.ADD:
        this.addTest();
        break;
      case QuizesEvents.DELETE:
        this.deleteTest(data as Quiz);
        break;
    }
  }

  private addTest(): void {
    const title = this.translator.instant('quizes.actions.add');
    this.dialog
      .open(QuizesPropertiesEditorComponent, { data: { title } })
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        this.store.dispatch(addQuizAction({ quiz: result }));
      });
  }

  private deleteTest(quiz: Quiz): void {
    const title = this.translator.instant('quizes.actions.deleteTitle');
    const message = this.translator
      .instant('quizes.actions.deleteMessage')
      .replace('{1}', quiz.name);
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: { title, message, type: 'accent' }
      })
      .afterClosed()
      .pipe(take(1), filter(Boolean))
      .subscribe(() => {
        this.store.dispatch(deleteQuizAction({ id: quiz.id }));
      });
  }

  private onSearch(search: string): void {
    this.store.dispatch(searchQuizesAction({ search }));
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingQuizesSelector));
    this.quizList$ = this.store.pipe(select(getQuizListSelector));
    this.store
      .pipe(
        takeWhile(() => this.alive),
        select(searchQuizesSelector)
      )
      .subscribe((search: string) => {
        this.search = search;
      });
  }

  private initData(): void {
    this.store.dispatch(getQuizListAction());
  }
}
