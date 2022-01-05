import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Topic } from '@appApi';
import { addTopicAction, getTopicListAction, topicListSelector } from '@appStore';
import { PromptDialogComponent, PromptDialogData, PromptFieldData } from '@appUI/dialog';
import { CustomValidators } from '@appValidators/custom.validators';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, take, takeWhile } from 'rxjs';

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
export class TopicAssignmentComponent implements OnInit, OnDestroy {
  topicId: number;

  @Input() quizId: number;

  topicList: Topic[];
  touched = false;
  disabled = false;

  private alive = true;

  constructor(private store: Store, private dialog: MatDialog, private translator: TranslateService) {}

  ngOnInit(): void {
    this.initSelectors();
    this.initData();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  onChange = (topicId) => {};
  onTouched = () => {};

  trackBy(index: number, field: Topic): any {
    return field.id;
  }

  onAddTopic(): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }
    const data = this.getPromptDialogData();
    this.dialog
      .open(PromptDialogComponent, { data })
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        const topic = { title: result, quizId: this.quizId };
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
    this.store
      .pipe(
        select(topicListSelector),
        takeWhile(() => this.alive)
      )
      .subscribe((topicList: Topic[]) => {
        this.topicList = topicList;
      });
  }

  private initData(): void {
    this.store.dispatch(getTopicListAction({ quizId: this.quizId }));
  }

  private getPromptDialogData(): PromptDialogData {
    const title = this.translator.instant('topics.add');
    const message = this.translator.instant('topics.topicDescription');
    const field = this.getPromptFieldData();
    return { title, message, type: 'primary', field };
  }

  private getPromptFieldData(): PromptFieldData {
    const label = this.translator.instant('topics.topicName');
    const existNames = this.topicList.map((topic: Topic) => topic.title);
    const validators = [CustomValidators.required(), CustomValidators.uniqueNameValidator(existNames)];
    const errorMessages = this.translator.instant('topics.errorMessages');
    return { label, value: null, validators, errorMessages };
  }
}
