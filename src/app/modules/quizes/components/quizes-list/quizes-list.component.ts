import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Quiz } from '@appApi';
import { QuizesEventEmmited, QuizesEvents } from '../../shared/models';

import { QuizesTableColumnsConstants } from '../../shared/constants';
import { FADE_IN_CONTENT_BY_OPACITY } from '@appConstants';

@Component({
  selector: 'td-quizes-list',
  templateUrl: './quizes-list.component.html',
  styleUrls: ['./quizes-list.component.scss'],
  animations: [FADE_IN_CONTENT_BY_OPACITY],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesListComponent {

  @Output() action: EventEmitter<QuizesEventEmmited> = new EventEmitter<QuizesEventEmmited>();

  public dataSource: MatTableDataSource<Quiz>;

  @Input() set collection(value: Quiz[]) {
    this.dataSource.data = value && [...value];
  }

  public get displayedColumns(): string[] {
    return QuizesTableColumnsConstants;
  }

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  onDeleteQuiz(data: number): void {
    this.action.emit({
      action: QuizesEvents.DELETE,
      data
    })
  }
}
