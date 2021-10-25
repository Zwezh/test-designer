import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopicsAssignmentComponent } from './topics-assignment.component';

describe('TopicsAssignmentComponent', () => {
  let component: TopicsAssignmentComponent;
  let fixture: ComponentFixture<TopicsAssignmentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TopicsAssignmentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
