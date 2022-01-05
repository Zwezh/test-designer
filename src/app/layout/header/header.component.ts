import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Teacher } from '@appApi';
import { FADE_IN_CONTENT_BY_OPACITY_ONE_WAY } from '@appConstants';
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
  animations: [FADE_IN_CONTENT_BY_OPACITY_ONE_WAY],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  currentTeacher$: Observable<Teacher>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initSelectors();
  }

  onEditTeacher(): void {
    const dialogRef = this.dialog.open(TeacherEditComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe();
  }

  onSignOut(): void {
    this.store.dispatch(logoutAction());
  }

  private initSelectors(): void {
    this.currentTeacher$ = this.store.pipe(
      select(authGetCurrentTeacherSelector)
    );
    this.isLoggedIn$ = this.store.pipe(select(authIsLoggedInSelector));
  }
}
