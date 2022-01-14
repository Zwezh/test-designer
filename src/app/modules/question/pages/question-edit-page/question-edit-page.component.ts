import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  template: './question-edit-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionEditPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
