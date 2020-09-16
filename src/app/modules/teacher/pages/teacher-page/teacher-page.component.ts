import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '@appApi';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { TeacherService } from '../../shared/services';

@Component({
  selector: 'td-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherPageComponent implements OnInit {

  public teacher$: Observable<Teacher>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _teacherService: TeacherService
  ) {
    this.teacher$ = _teacherService.teacher$;
  }

  public ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.params.id;
    this._teacherService.getTeacher$(id).pipe(take(1)).subscribe();
  }

}