import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '@appApi';
import { QuizesPropertiesEditorComponent } from '@appModules/quizes/components';
import { QuizesEventEmmited, QuizesEvents, QuizesPropertiesEditorData } from '@appModules/quizes/shared/models';
import { getOneQuizAction, getOneQuizSelector, isLoadingQuizesSelector, QuizesActionTypes, QuizModel, updateQuizAction } from '@appStore';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, take } from 'rxjs';

@Component({
  templateUrl: './quizes-details-page.component.html',
  styleUrls: ['./quizes-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizDetailsPageComponent implements OnInit {
  quiz$: Observable<QuizModel | null>;
  isLoading$: Observable<boolean>;
  quizId: number;

  constructor(
    route: ActivatedRoute,
    private store: Store,
    private translator: TranslateService,
    private dialog: MatDialog
  ) {
    this.quizId = +route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  onAction({ action, data }: QuizesEventEmmited): void {
    // switch (action) {
    //   case QuizesEvents.UPDATE:
    //     this.updateQuiz(data as Quiz);
    //     break;
    // }
  }

  // onChangeHandler(event: PointerEvent, quiz: Quiz): void {
  //   const button = this.closest(event.target as HTMLElement, 'button');
  //   if (!button) { return; }
  //   const { action, id } = button;
  //   if (QuizesActionTypes.UPDATE === action) {
  //     this.updateQuiz(quiz);
  //   }
  // }

  private updateQuiz(quiz: Quiz): void {
    const title = this.translator.instant('quizes.actions.add');
    this.dialog
      .open(QuizesPropertiesEditorComponent, { data: { title, quiz } as QuizesPropertiesEditorData })
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        this.store.dispatch(updateQuizAction({ quiz: { ...quiz, ...result } }));
      });
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingQuizesSelector));
    this.quiz$ = this.store.pipe(select(getOneQuizSelector));
  }

  private initData(): void {
    this.store.dispatch(getOneQuizAction({ id: this.quizId }));
  }

  // private closest(element: HTMLElement, selector: string): DOMStringMap {
  //   do {
  //     if (element.matches && element.matches(selector)) { return element.dataset; }
  //     element = element.parentNode as HTMLElement;
  //   } while (element);
  // }
}
