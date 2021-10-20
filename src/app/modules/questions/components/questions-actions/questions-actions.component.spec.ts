import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsEvents } from '@appModules/questions/shared/models';
import { SearchModule } from '@appPipes/search';
import { TranslateModule } from '@ngx-translate/core';

import { QuestionsActionsComponent } from './questions-actions.component';

describe('QuestionsActionsComponent', () => {
  let component: QuestionsActionsComponent;
  let fixture: ComponentFixture<QuestionsActionsComponent>;

  const expectedSEarchValue = 'Test search';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          NoopAnimationsModule,
          SearchModule
        ],
        declarations: [QuestionsActionsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsActionsComponent);
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
      action: QuestionsEvents.SEARCH,
      data: expectedSEarchValue
    });
  });

  it('onAddTest should emit action', () => {
    spyOn(component.action, 'emit');
    component.onAddQuestion();
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith({
      action: QuestionsEvents.ADD
    });
  });
});
