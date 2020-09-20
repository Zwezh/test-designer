import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Teacher } from '@appApi';
import { AuthenticationService } from '@appServices';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public currentTeacher$: Observable<Teacher>;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router) {
    this.currentTeacher$ = _authService.teacher$;
  }

  public onSignOut(): void {
    this._authService.logout();
    this._router.navigateByUrl('');
  }

}
