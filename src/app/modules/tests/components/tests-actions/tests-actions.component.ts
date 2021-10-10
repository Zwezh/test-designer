import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TestsActionEmmited, TestsActions } from '../../shared/tests-event.model';

@Component({
  selector: 'td-tests-actions',
  templateUrl: './tests-actions.component.html',
  styleUrls: ['./tests-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsActionsComponent {

  @Input() value: string;
  @Output() action: EventEmitter<TestsActionEmmited> = new EventEmitter<TestsActionEmmited>();

  constructor() { }

  onSearch(event: Event) {
    const data = (event.target as HTMLInputElement).value;
    this.action.emit({ action: TestsActions.SEARCH, data })
  }

  onAddTest(): void {
    this.action.emit({ action: TestsActions.ADD })
  }
}
