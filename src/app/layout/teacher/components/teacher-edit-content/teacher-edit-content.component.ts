import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { TeacherEditForm } from '@appLayouts/teacher/shared';
import {
  TeacherAction,
  TeacherActions
} from '@appLayouts/teacher/shared/types';

@Component({
  selector: 'td-teacher-edit-content',
  templateUrl: './teacher-edit-content.component.html',
  styleUrls: ['./teacher-edit-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherEditContentComponent {
  @Input() form: TeacherEditForm;
  @Output() action: EventEmitter<TeacherAction>;

  hide: boolean;
  teacherActions = TeacherActions;
  get isDisable(): boolean {
    return this.form.invalid;
  }

  constructor() {
    this.hide = true;
    this.action = new EventEmitter<TeacherAction>();
  }
}
