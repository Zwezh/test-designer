import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '@appApi';

@Component({
  selector: 'td-teacher-menu',
  templateUrl: './teacher-menu.component.html',
  styleUrls: ['./teacher-menu.component.scss']
})
export class TeacherMenuComponent {

  @Input() teacher: Teacher;
  @Output() signOut: EventEmitter<void>;

  constructor() {
    this.signOut = new EventEmitter<void>();
  }
  public onSignOut(): void {
    this.signOut.emit();
  }

}
