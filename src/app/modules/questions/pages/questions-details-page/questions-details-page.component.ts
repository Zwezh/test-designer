import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Topic } from '@appApi';

@Component({
  selector: 'td-questions-details-page',
  templateUrl: './questions-details-page.component.html',
  styleUrls: ['./questions-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsDetailsPageComponent implements OnInit {
  topics: Topic[] = [
    {
      id: 0,
      title: 'T0pic #0',
      quizId: 0
    },
    {
      id: 1,
      title: 'T0pic #1',
      quizId: 1
    },
    {
      id: 2,
      title: 'T0pic #2',
      quizId: 2
    }
  ];
  constructor() {}

  ngOnInit() {}
}
