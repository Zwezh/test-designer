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
import { TestsActionEmmited, TestsActions } from '../../shared/models';

@Component({
  selector: 'td-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsPageComponent implements OnInit {
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

  public onAction({ action, data }: TestsActionEmmited): void {
    switch (action) {
      case TestsActions.SEARCH:
        this.onSearch(data as string);
        break;
      case TestsActions.ADD:
        this.addTest();
        break;
      case TestsActions.DELETE:
        this.deleteTest(data as Quiz);
        break;
    }
  }

  private addTest(): void {
    this.openCreateEditDialog(this.translator.instant('actionTests.add'))
      .pipe(take(1)).subscribe(result => {
        this.store.dispatch(addQuizAction({ quiz: result }));
      });
  }

  private deleteTest(quiz: Quiz): void {
    console.info(quiz);
    const title = this.translator.instant('actionTests.deleteTitle');
    const message = this.translator.instant('actionTests.deleteMessage').replace('{1}', quiz.name);
    this.dialog.open(ConfirmationDialogComponent, { data: { title, message, type: 'accent' } })
      .afterClosed()
      .pipe(
        take(1),
        filter((Boolean)))
      .subscribe(() => {
        this.store.dispatch(deleteQuizAction({ id: quiz.id }));
      });
  }

  private openCreateEditDialog(title: string, quiz?: Quiz): Observable<Partial<Quiz>> {
    console.info(quiz);
    return this.dialog.open(QuizPropertiesEditorComponent, { data: { title, quiz } })
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      );
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
