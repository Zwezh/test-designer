import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeacherEditContentComponent } from './teacher-edit-content.component';

describe('TeacherEditContentComponent', () => {
  let component: TeacherEditContentComponent;
  let fixture: ComponentFixture<TeacherEditContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TeacherEditContentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should isDisable be true', () => {
    expect(component.isDisable).toBeTruthy();
  });

  it('Should input form', () => {
    const form = component.form;
    expect(form).toBeTruthy();
  });
});
