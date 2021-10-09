import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { addQuizAction } from '@appStore';
import { Store } from '@ngrx/store';
import { TestsAdd } from '../../shared/forms';

@Component({
  selector: 'td-tests-add-page',
  templateUrl: './tests-add-page.component.html',
  styleUrls: ['./tests-add-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TestsAddPageComponent implements OnInit {
  public form: TestsAdd;

  constructor(private store: Store) {}

  public ngOnInit() {
    this.form = new TestsAdd();
  }

  public onSave(): void {
    this.store.dispatch(addQuizAction({ quiz: this.form.quizFromForm }));
  }
}
