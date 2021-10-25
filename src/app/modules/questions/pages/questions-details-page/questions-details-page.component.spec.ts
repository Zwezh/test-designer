import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { QuestionsDetailsPageComponent } from './questions-details-page.component';

describe('QuestionsDetailsPageComponent', () => {
  let component: QuestionsDetailsPageComponent;
  let fixture: ComponentFixture<QuestionsDetailsPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MatCardModule, MatToolbarModule, MatButtonModule, NoopAnimationsModule],
        declarations: [QuestionsDetailsPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
