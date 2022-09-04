import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '@appApi';
import { QuestionDetailsForm } from '@appModules/question/shared';
import { QuestionsCategoriesConstants } from '@appModules/questions/shared';
import { PromptDialogComponent, PromptDialogData, PromptFieldData } from '@appUI/dialog';
import { CustomValidators } from '@appValidators/custom.validators';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, take, takeWhile } from 'rxjs';

import { addTopicAction, getTopicListAction, questionTopicListSelector } from '../../../../store/features/question';

@Component({
  selector: 'td-question-details-editor',
  templateUrl: './question-details-editor.component.html',
  styleUrls: ['./question-details-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionDetailsEditorComponent implements OnInit, OnDestroy {

  @Input() set quizId(value: number) {
    if (!value) { return; }
    this.initData(value);
    this.#quizId = value;
  }
  @Input() form: QuestionDetailsForm;
  @Output() save = new EventEmitter<void>();

  questionsCategories = QuestionsCategoriesConstants;
  weights = new Array(10).fill(0).map((_, index) => index + 1);

  topicList: Topic[];
  #alive = true;
  #quizId = null
  ngOnInit(): void {
    this.initSelectors();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private dialog: MatDialog,
    private translator: TranslateService,
    private changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnDestroy(): void {
    this.#alive = false;
  }

  trackBy(index: number): number {
    return index;
  }

  onAddTopic(): void {
    const data = this.getPromptDialogData();
    this.dialog
      .open(PromptDialogComponent, { data })
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        const topic = { title: result, quizId: this.#quizId };
        this.store.dispatch(addTopicAction({ topic }));
      });
  }

  onCancel(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  private initSelectors(): void {
    this.store
      .pipe(
        select(questionTopicListSelector),
        takeWhile(() => this.#alive)
      )
      .subscribe((topicList: Topic[]) => {
        this.topicList = topicList;
        this.changeDetectionRef.markForCheck();
      });
  }

  private initData(quizId): void {
    this.store.dispatch(getTopicListAction({ quizId }));
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
