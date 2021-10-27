import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Topic } from '@appApi';
import { addTopicAction, getTopicListAction, topicListSelector } from '@appStore';
import { PromptDialogComponent } from '@appUI/dialog';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, Observable, take } from 'rxjs';

@Component({
  selector: 'td-topic-assignment',
  templateUrl: './topic-assignment.component.html',
  styleUrls: ['./topic-assignment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TopicAssignmentComponent
    }
  ]
})
export class TopicAssignmentComponent implements OnInit {
  topicId: number;

  @Input() quizId: number;

  topicList$: Observable<Topic[]>;
  touched = false;
  disabled = false;

  onChange = (topicId) => {};

  onTouched = () => {};

  constructor(private store: Store, private dialog: MatDialog, private translator: TranslateService) {}

  ngOnInit(): void {
    this.initSelectors();
    this.initData();
  }

  trackBy(index: number, field: Topic): any {
    return field.id;
  }

  onAddTopic(): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    const title = this.translator.instant('topics.add');
    this.dialog
      .open(PromptDialogComponent, { data: { title, message: 'message', type: 'primary' } })
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        const topic = {
          title: result,
          quizId: this.quizId
        };
        this.store.dispatch(addTopicAction({ topic }));
      });
    // this.quantity+= this.increment;
    // this.onChange(this.quantity);
  }

  writeValue(topicId: number): void {
    this.topicId = topicId;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  private initSelectors(): void {
    this.topicList$ = this.store.pipe(select(topicListSelector));
  }

  private initData(): void {
    this.store.dispatch(getTopicListAction({ quizId: this.quizId }));
  }
}
