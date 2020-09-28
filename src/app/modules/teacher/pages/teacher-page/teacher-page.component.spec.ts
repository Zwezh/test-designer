import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TeacherPageComponent } from './teacher-page.component';


describe('TeacherPageComponent', () => {
  let component: TeacherPageComponent;
  let fixture: ComponentFixture<TeacherPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TeacherPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Component should be created', () => {
    expect(component).toBeTruthy();
  });
});
