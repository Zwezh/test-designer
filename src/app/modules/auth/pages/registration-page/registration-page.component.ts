import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '@appApi';
import { take } from 'rxjs/operators';

import { AuthResourcesConstants } from '../../shared';
import { TeacherEditForm } from '../../shared/forms';
import { LoginService } from '../../shared/services';


@Component({
  selector: 'td-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationPageComponent {

  public form: TeacherEditForm;
  public hide = true;

  public get isDisable(): boolean {
    return this.form.invalid;
  }

  constructor(
    private _router: Router,
    private _loginService: LoginService) {
    this.form = new TeacherEditForm();
  }

  public onOpenLoginPage(): void {
    this._router.navigateByUrl('');
  }

  public onAddNewTeacher(): void {
    const teacher = {
      position: this.form.position.value,
      name: this.form.name.value,
      lastName: this.form.lastName.value,
      patronymic: this.form.patronymic.value,
      password: this.form.password.value
    } as Teacher;
    this._loginService.addTeacher$(teacher).pipe(take(1)).subscribe();
  }
}
