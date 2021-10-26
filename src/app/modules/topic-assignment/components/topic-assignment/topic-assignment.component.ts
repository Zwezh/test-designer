import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '@appApi';
import { getTopicListAction, topicListSelector } from '@appStore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'td-topic-assignment',
  templateUrl: './topic-assignment.component.html',
  styleUrls: ['./topic-assignment.component.scss']
})
export class TopicAssignmentComponent implements OnInit {
  @Input() quizId: number;

  topicList$: Observable<Topic[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initSelectors();
    this.initData();
  }

  private initSelectors(): void {
    this.topicList$ = this.store.pipe(select(topicListSelector));
  }

  private initData(): void {
    this.store.dispatch(getTopicListAction({ quizId: this.quizId }));
  }
}
