import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherEditForm } from '@appForms';


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

  constructor(private _router: Router) {
    this.form = new TeacherEditForm();
  }

  public onOpenLoginPage(): void {
    this._router.navigate(['']);
  }
}
