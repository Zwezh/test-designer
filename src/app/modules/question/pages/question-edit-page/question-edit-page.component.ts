import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '@appApi';
import { QuestionDetailsForm } from '@appModules/question/shared';
import { select, Store } from '@ngrx/store';
import { getQuestionAction, questionIsLoadingSelector, questionSelector, updateQuestionAction } from 'app/store/features/question';
import { filter, Observable, takeWhile } from 'rxjs';

@Component({
  templateUrl: './question-edit-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionEditPageComponent implements OnInit, OnDestroy {

  form = new QuestionDetailsForm();
  isLoading$: Observable<boolean>;
  questionId: number;
  quizId: number;
  #alive = true;
  #question: Question;

  constructor(
    route: ActivatedRoute,
    private store: Store,
    private changeDetectionRef: ChangeDetectorRef
  ) {
    this.questionId = +route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.initSelectors();
    this.initData();
  }

  ngOnDestroy(): void {
    this.#alive = false;
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(questionIsLoadingSelector));
    this.store.pipe(select(questionSelector))
      .pipe(
        takeWhile(() => this.#alive),
        filter((result: Question) => !!result))
      .subscribe((result: Question) => {
        this.#alive = result.quizId !== this.quizId;
        this.quizId = result.quizId;
        this.#question = result;
        this.form = new QuestionDetailsForm(result);
        this.changeDetectionRef.detectChanges();
      });
  }

  private initData(): void {
    this.store.dispatch(getQuestionAction({ questionId: this.questionId }));
  }

  onChangeQuestion(): void {
    const question = {...this.#question, ...this.form.questionFromForm};
    this.store.dispatch(updateQuestionAction({question}));
  }

}
