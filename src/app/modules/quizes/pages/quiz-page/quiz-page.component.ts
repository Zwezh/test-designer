import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { addQuizAction } from '@appStore';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizPageComponent implements OnInit {
  // public form: TestsAdd;

  constructor(private store: Store) { }

  public ngOnInit() {
    // this.form = new TestsAdd();
  }

  public onSave(): void {
    // this.store.dispatch(addQuizAction({ quiz: this.form.quizFromForm }));
  }
}
