import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'td-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsPageComponent {}
