/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherBarComponent } from './teacher-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Teacher } from '@appApi';
import { TranslateModule } from '@ngx-translate/core';

describe('TeacherBarComponent', () => {
  let component: TeacherBarComponent;
  let fixture: ComponentFixture<TeacherBarComponent>;

  const expectedTeacher = {
    name: 'Alex',
    lastName: 'Born',
    patronymic: 'C',
    position: 'D'
  } as Teacher;

  const expectedShortName = 'B.A.';

  const MATERAIL = [
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ];
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        ...MATERAIL
      ],
      declarations: [TeacherBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBarComponent);
    component = fixture.componentInstance;
    component.teacher = expectedTeacher;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Correct short name', () => {
    expect(component.shortName).toEqual(expectedShortName);
  });
});
