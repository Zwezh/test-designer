import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Quiz } from '@appApi';
import { FADE_IN_CONTENT_BY_OPACITY } from '@appConstants';

import { QuizesTableColumnsConstants } from '../../shared/constants';
import { QuizesEventEmmited, QuizesEvents } from '../../shared/models';

@Component({
  selector: 'td-quizes-list',
  templateUrl: './quizes-list.component.html',
  styleUrls: ['./quizes-list.component.scss'],
  animations: [FADE_IN_CONTENT_BY_OPACITY],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesListComponent {
  @Input() set list(value: Quiz[]) {
    this.dataSource.data = value && [...value];
  }
  @Output() action: EventEmitter<QuizesEventEmmited> = new EventEmitter<QuizesEventEmmited>();

  dataSource: MatTableDataSource<Quiz>;

  get displayedColumns(): string[] {
    return QuizesTableColumnsConstants;
  }

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  onDeleteQuiz(data: number): void {
    this.action.emit({
      action: QuizesEvents.DELETE,
      data
    });
  }
}
