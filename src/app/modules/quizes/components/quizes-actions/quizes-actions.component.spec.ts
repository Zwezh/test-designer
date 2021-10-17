import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuizesEvents } from '@appModules/quizes/shared/models';
import { SearchModule } from '@appPipes/search';
import { TranslateModule } from '@ngx-translate/core';

import { QuizesActionsComponent } from './quizes-actions.component';

describe('QuizesActionsComponent', () => {
  let component: QuizesActionsComponent;
  let fixture: ComponentFixture<QuizesActionsComponent>;
  const expectedSEarchValue = 'Test search';
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          NoopAnimationsModule,
          SearchModule
        ],
        declarations: [QuizesActionsComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesActionsComponent);
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
      action: QuizesEvents.SEARCH,
      data: expectedSEarchValue
    });
  });

  it('onAddTest should emit action', () => {
    spyOn(component.action, 'emit');
    component.onAddTest();
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith({
      action: QuizesEvents.ADD
    });
  });
});
