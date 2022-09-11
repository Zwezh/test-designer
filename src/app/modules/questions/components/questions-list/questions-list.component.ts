import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from '@appApi';
import { QuizesActionTypes } from '@appStore';

import { QuestionsTableColumnsConstants } from '../../shared';

@Component({
  selector: 'td-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsListComponent {

  @Input() set questionList(value: Question[]) {
    this.dataSource.data = value || [];

  }
  dataSource: MatTableDataSource<Question> = new MatTableDataSource<Question>([]);

  get displayedColumns(): string[] {
    return QuestionsTableColumnsConstants;
  }
  deleteAction = QuizesActionTypes.DELETE_QUESTION;
}
