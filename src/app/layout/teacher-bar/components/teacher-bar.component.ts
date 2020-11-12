import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '@appApi';

@Component({
  selector: 'td-teacher-bar',
  templateUrl: './teacher-bar.component.html',
  styleUrls: ['./teacher-bar.component.scss']
})
export class TeacherBarComponent {
  @Input() teacher: Teacher;
  @Output() signOut: EventEmitter<void>;
  @Output() editTeacher: EventEmitter<void>;

  public get shortName(): string {
    return `${this.teacher.lastName[0]}.${this.teacher.name[0]}.`;
  }

  constructor() {
    this.signOut = new EventEmitter<void>();
    this.editTeacher = new EventEmitter<void>();
  }

  public onSignOut(): void {
    this.signOut.emit();
  }

  public onEditTeacher(): void {
    this.editTeacher.emit();
  }
}
