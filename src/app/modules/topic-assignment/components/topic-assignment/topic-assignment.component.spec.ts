import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { TopicAssignmentComponent } from './topic-assignment.component';

describe('TopicAssignmentComponent', () => {
  let component: TopicAssignmentComponent;
  let fixture: ComponentFixture<TopicAssignmentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          ReactiveFormsModule,
          MatCardModule,
          MatToolbarModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule,
          MatSelectModule,
          NoopAnimationsModule
        ],
        declarations: [TopicAssignmentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
