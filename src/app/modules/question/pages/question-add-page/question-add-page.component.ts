import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './question-add-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAddPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
