import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Teacher } from '@appApi';
import { CreateEditTeacherComponent } from '@appLayouts/create-edit-teacher';
import { AuthenticationService } from '@appServices';
import { TeachersStore } from '@appStores';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public currentTeacher$: Observable<Teacher>;

  constructor(
    private _store: TeachersStore,
    private _router: Router,
    private _dialog: MatDialog,
    private _authService: AuthenticationService) {
    this.currentTeacher$ = _store.currentTeacher$;
  }
  ngOnInit(): void {
    this._store.getCurrentTeacher$(this._authService.teacherId)
      .pipe(take(1))
      .subscribe();
  }

  public onEditTeacher(): void {
    const dialogRef = this._dialog.open(CreateEditTeacherComponent, {
      width: '550px',
      data: this._store.currentTeacher
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter((teacher: Teacher) => !!teacher),
        switchMap((teacher: Teacher) => this._store.updateTeacher$({ ...teacher, id: this._store.currentTeacher.id })))
      .subscribe();
  }

  public onSignOut(): void {
    this._authService.logout();
    this._store.currentTeacher = null;
    this._router.navigateByUrl('');
  }

}
