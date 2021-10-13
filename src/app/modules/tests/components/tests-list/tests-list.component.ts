import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Quiz } from '@appApi';
import { TestsActionEmmited, TestsActions } from '../../shared/models';

import { TestsTableColumnsConstants } from '../../shared/constants';
import { FADE_IN_CONTENT_BY_OPACITY } from '@appConstants';

@Component({
  selector: 'td-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss'],
  animations: [FADE_IN_CONTENT_BY_OPACITY],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestsListComponent {

  @Output() action: EventEmitter<TestsActionEmmited> = new EventEmitter<TestsActionEmmited>();

  public dataSource: MatTableDataSource<Quiz>;

  @Input() set collection(value: Quiz[]) {
    this.dataSource.data = value && [...value];
  }

  public get displayedColumns(): string[] {
    return TestsTableColumnsConstants;
  }

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  onDeleteQuiz(data: number): void {
    this.action.emit({
      action: TestsActions.DELETE,
      data
    })
  }
}
