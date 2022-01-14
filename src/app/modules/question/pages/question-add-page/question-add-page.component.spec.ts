import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuizesActionsComponent } from '@appModules/quizes/components';
import { SearchModule } from '@appPipes/search';
import { TranslateModule } from '@ngx-translate/core';

import { QuestionAddPageComponent } from './question-add-page.component';

describe('QuestionAddPageComponent', () => {
  let component: QuestionAddPageComponent;
  let fixture: ComponentFixture<QuestionAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [QuestionAddPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
