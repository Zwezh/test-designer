import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Quiz } from '@appApi';
import {
  addQuizAction,
  getQuizCollectionAction,
  quizGetCollectionSelector,
  quizIsLoadingSelector,
  quizSearchSelector,
  searchQuizAction
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { Observable, takeWhile } from 'rxjs';
import { TestsAddDialogComponent } from '../../components/tests-add-dialog/tests-add-dialog.component';
import { TestsActionEmmited, TestsActions } from '../../shared/tests-event.model';

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

  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initData();
    this.initSelectors();
  }

  public onAction({ action, data }: TestsActionEmmited): void {
    switch (action) {
      case TestsActions.SEARCH:
        this.onSearch(data);
        break;
      case TestsActions.ADD:
        this.onAddTest();
    }
  }

  private onAddTest(): void {
    const dialogRef = this.dialog.open(TestsAddDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.store.dispatch(addQuizAction({ quiz: result.quiz }));
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
