import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TeacherTableColumnsConstants } from '../../shared/constants';

import { TeacherTestsListComponent } from './teacher-tests-list.component';

describe('TeacherTestsListComponent', () => {
  let component: TeacherTestsListComponent;
  let fixture: ComponentFixture<TeacherTestsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TeacherTestsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Correct column values', () => {
    expect(component.displayedColumns.join()).toEqual(TeacherTableColumnsConstants.join());
  });

});
