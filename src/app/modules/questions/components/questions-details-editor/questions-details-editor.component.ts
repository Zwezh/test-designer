import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Topic } from '@appApi';
import { QuestionsCategoriesConstants } from '@appModules/questions/shared';

@Component({
  selector: 'td-questions-details-editor',
  templateUrl: './questions-details-editor.component.html',
  styleUrls: ['./questions-details-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsDetailsEditorComponent {
  @Input() quizId: number;
  @Input() topics: Topic[];

  questionsCategories = QuestionsCategoriesConstants;
  weights = new Array(10).fill(0).map((_, index) => index + 1);

  trackBy(index: number, field: any): any {
    return index;
  }

  getWeightValues(): number[] {
    return new Array(10).fill(0).map((_, index) => index + 1);
  }

  onAddTopic(): void {
    // console.info('On Add Topic');
  }
}
