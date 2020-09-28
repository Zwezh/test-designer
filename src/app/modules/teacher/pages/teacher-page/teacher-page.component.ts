import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Teacher } from '@appApi';
import { Observable } from 'rxjs';

@Component({
  selector: 'td-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherPageComponent { }