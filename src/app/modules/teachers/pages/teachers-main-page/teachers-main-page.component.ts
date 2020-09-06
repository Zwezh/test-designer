import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TeachersAddComponent } from '../../components';

@Component({
  selector: 'td-teachers-main-page',
  templateUrl: './teachers-main-page.component.html',
  styleUrls: ['./teachers-main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeachersMainPageComponent {

  constructor(private _dialog: MatDialog) { }

  public onOpenNewTeacher(): void {
    this._dialog.open(TeachersAddComponent, {
      width: '600px',
      autoFocus: false
    });
  }

}
