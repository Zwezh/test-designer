import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Teacher } from '@appApi';
import { TeacherEditComponent } from '@appLayouts/teacher';
import {
  authGetCurrentTeacherSelector,
  authIsLoggedInSelector,
  logoutAction
} from '@appStore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public currentTeacher$: Observable<Teacher>;
  public isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.initSelectors();
  }

  public onEditTeacher(): void {
    const dialogRef = this.dialog.open(TeacherEditComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe();
  }

  public onSignOut(): void {
    this.store.dispatch(logoutAction());
  }

  private initSelectors(): void {
    this.currentTeacher$ = this.store.pipe(
      select(authGetCurrentTeacherSelector)
    );
    this.isLoggedIn$ = this.store.pipe(select(authIsLoggedInSelector));
  }
}
