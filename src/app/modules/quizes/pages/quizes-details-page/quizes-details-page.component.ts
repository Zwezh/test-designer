import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '@appApi';
import { QuizesPropertiesEditorComponent } from '@appModules/quizes/components';
import { QuizesEventEmmited, QuizesEvents, QuizesPropertiesEditorData } from '@appModules/quizes/shared/models';
import { getOneQuizAction, getOneQuizSelector, isLoadingQuizesSelector, updateQuizAction } from '@appStore';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, take } from 'rxjs';

@Component({
  templateUrl: './quizes-details-page.component.html',
  styleUrls: ['./quizes-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizDetailsPageComponent implements OnInit {
  quiz$: Observable<Quiz | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private translator: TranslateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  onAction({ action, data }: QuizesEventEmmited): void {
    switch (action) {
      case QuizesEvents.UPDATE:
        this.updateQuestion(data as Quiz);
        break;
    }
  }

  private updateQuestion(quiz: Quiz): void {
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(getOneQuizAction({ id }));
  }
}
