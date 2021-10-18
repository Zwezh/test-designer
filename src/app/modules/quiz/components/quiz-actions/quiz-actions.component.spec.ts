import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuizEvents } from '@appModules/quiz/shared/models';
import { SearchModule } from '@appPipes/search';
import { TranslateModule } from '@ngx-translate/core';

import { QuizActionsComponent } from './quiz-actions.component';

describe('QuizActionsComponent', () => {
  let component: QuizActionsComponent;
  let fixture: ComponentFixture<QuizActionsComponent>;

  const expectedSEarchValue = 'Test search';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          NoopAnimationsModule,
          SearchModule
        ],
        declarations: [QuizActionsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch should emit action', () => {
    spyOn(component.action, 'emit');
    component.onSearch(expectedSEarchValue);
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith({
      action: QuizEvents.SEARCH,
      data: expectedSEarchValue
    });
  });

  it('onAddTest should emit action', () => {
    spyOn(component.action, 'emit');
    component.onAddQuestion();
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith({
      action: QuizEvents.ADD
    });
  });
});
