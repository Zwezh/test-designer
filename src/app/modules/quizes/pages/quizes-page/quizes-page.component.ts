import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Quiz } from '@appApi';
import { QuizPropertiesEditorComponent } from '@appModules/quiz-properties-editor';
import {
  addQuizAction,
  deleteQuizAction,
  getQuizCollectionAction,
  quizGetCollectionSelector,
  quizIsLoadingSelector,
  quizSearchSelector,
  searchQuizAction,
} from '@appStore';
import { ConfirmationDialogComponent } from '@appUI/dialog';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, take, takeWhile } from 'rxjs';
import { QuizesEventEmmited, QuizesEvents } from '../../shared/models';

@Component({
  templateUrl: './quizes-page.component.html',
  styleUrls: ['./quizes-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesPageComponent implements OnInit {
  public quizCollection$: Observable<Quiz[] | null>;
  public isLoading$: Observable<boolean>;
  public search: string;

  private alive = true;


  constructor(
    private store: Store,
    private dialog: MatDialog,
    private translator: TranslateService) { }

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  public onAction({ action, data }: QuizesEventEmmited): void {
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
    const title = this.translator.instant('actionQuizes.add');
    this.dialog.open(QuizPropertiesEditorComponent, { data: { title } }).afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      ).subscribe(result => {
        this.store.dispatch(addQuizAction({ quiz: result }));
      });
  }

  private deleteTest(quiz: Quiz): void {
    console.info(quiz);
    const title = this.translator.instant('actionQuizes.deleteTitle');
    const message = this.translator.instant('actionQuizes.deleteMessage').replace('{1}', quiz.name);
    this.dialog.open(ConfirmationDialogComponent, { data: { title, message, type: 'accent' } })
      .afterClosed()
      .pipe(
        take(1),
        filter((Boolean)))
      .subscribe(() => {
        this.store.dispatch(deleteQuizAction({ id: quiz.id }));
      });
  }

  private onSearch(search: string) {
    this.store.dispatch(searchQuizAction({ search }))
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(quizIsLoadingSelector));
    this.quizCollection$ = this.store.pipe(select(quizGetCollectionSelector));
    this.store.pipe(takeWhile(() => this.alive), select(quizSearchSelector)).subscribe((search: string) => {
      this.search = search;
    })
  }

  private initData(): void {
    this.store.dispatch(getQuizCollectionAction());
  }
}
