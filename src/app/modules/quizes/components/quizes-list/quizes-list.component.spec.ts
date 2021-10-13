import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { QuizesTableColumnsConstants } from '../../shared/constants';

import { QuizesListComponent } from './quizes-list.component';

describe('QuizesListComponent', () => {
  let component: QuizesListComponent;
  let fixture: ComponentFixture<QuizesListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [QuizesListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Correct column values', () => {
    expect(component.displayedColumns.join()).toEqual(
      QuizesTableColumnsConstants.join()
    );
  });
});
