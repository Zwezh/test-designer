import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'td-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherPageComponent {

  constructor() { }

}