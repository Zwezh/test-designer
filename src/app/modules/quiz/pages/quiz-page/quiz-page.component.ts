import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '@appApi';
import { QuizEventEmmited, QuizEvents } from '@appModules/quiz/shared/models';
import {
  getQuizAction,
  quizGetSelector,
  quizIsLoadingSelector,
  quizSearchSelector,
  searchQuizesAction
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, takeWhile } from 'rxjs';

@Component({
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizPageComponent implements OnInit {
  quiz$: Observable<Quiz | null>;
  isLoading$: Observable<boolean>;

  search: string;

  private alive = true;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private translator: TranslateService
  ) {}

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  onAction({ action, data }: QuizEventEmmited): void {
    switch (action) {
      case QuizEvents.SEARCH:
        this.onSearch(data as string);
        break;
      case QuizEvents.ADD:
        this.addQuestion();
        break;
      // case QuizesEvents.DELETE:
      //   this.deleteTest(data as Quiz);
      //   break;
    }
  }

  private addQuestion(): void {
    // const title = this.translator.instant('quizes.actions.add');
    // this.dialog
    //   .open(QuizPropertiesEditorComponent, { data: { title } })
    //   .afterClosed()
    //   .pipe(
    //     take(1),
    //     filter((result) => !!result)
    //   )
    //   .subscribe((result) => {
    //     this.store.dispatch(addQuizesAction({ quiz: result }));
    //   });
  }

  // private deleteTest(quiz: Quiz): void {
  //   const title = this.translator.instant('quizes.actions.deleteTitle');
  //   const message = this.translator
  //     .instant('quizes.actions.deleteMessage')
  //     .replace('{1}', quiz.name);
  //   this.dialog
  //     .open(ConfirmationDialogComponent, {
  //       data: { title, message, type: 'accent' }
  //     })
  //     .afterClosed()
  //     .pipe(take(1), filter(Boolean))
  //     .subscribe(() => {
  //       this.store.dispatch(deleteQuizesAction({ id: quiz.id }));
  //     });
  // }

  private onSearch(search: string): void {
    this.store.dispatch(searchQuizesAction({ search }));
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(quizIsLoadingSelector));
    this.quiz$ = this.store.pipe(select(quizGetSelector));
    this.store
      .pipe(
        takeWhile(() => this.alive),
        select(quizSearchSelector)
      )
      .subscribe((search: string) => {
        this.search = search;
      });
  }

  private initData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(getQuizAction({ id }));
  }
}
