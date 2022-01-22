import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Topic } from '@appApi';
import {
  getTopicListAction,
  topicListSelector
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { Observable, takeWhile } from 'rxjs';

@Component({
  selector: 'td-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsListComponent implements OnInit {

  @Input() quizId: number;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  topicList$: Observable<Topic[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initSelectors();
    this.initData();
  }

  private initSelectors(): void {
    this.topicList$ = this.store.pipe(select(topicListSelector));
  }

  private initData(): void {
    this.store.dispatch(getTopicListAction({quizId: this.quizId}));
  }
}
