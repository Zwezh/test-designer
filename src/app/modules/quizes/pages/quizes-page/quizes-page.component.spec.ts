import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { QuizesPageComponent } from './quizes-page.component';



describe('QuizesPageComponent', () => {
  let component: QuizesPageComponent;
  let fixture: ComponentFixture<QuizesPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [QuizesPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Component should be created', () => {
    expect(component).toBeTruthy();
  });
});
