import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TeachersEditForm } from '../../shared';

@Component({
  selector: 'td-teachers-add',
  templateUrl: './teachers-add.component.html',
  styleUrls: ['./teachers-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeachersAddComponent {

  public form: TeachersEditForm;
  public hide = true;

  public get isDisable(): boolean {
    return this.form.invalid;
  }

  constructor() {
    this.form = new TeachersEditForm();
  }
}
