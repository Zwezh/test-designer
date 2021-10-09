import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Quiz } from '@appApi';
import {
  getQuizCollectionAction,
  quizGetCollectionSelector,
  quizIsLoadingSelector
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'td-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsPageComponent implements OnInit {
  public quizCollection$: Observable<Quiz[] | null>;
  public isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  private initSelectors(): void {
    this.isLoading$ = this.store.pipe(select(quizIsLoadingSelector));
    this.quizCollection$ = this.store.pipe(select(quizGetCollectionSelector));
  }

  private initData(): void {
    this.store.dispatch(getQuizCollectionAction());
  }
}
