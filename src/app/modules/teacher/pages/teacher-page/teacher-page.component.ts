import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Teacher } from '@appApi';
import { AuthenticationService } from '@appServices';
import { Observable } from 'rxjs';

@Component({
  selector: 'td-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherPageComponent {

  public teacher$: Observable<Teacher>;

  constructor(authService: AuthenticationService) {
    this.teacher$ = authService.teacher$;
  }

}