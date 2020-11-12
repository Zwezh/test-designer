import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { TeacherEditComponent } from './teacher-edit.component';




describe('CreateEditTeacherComponent', () => {

  let component: TeacherEditComponent;
  let fixture: ComponentFixture<TeacherEditComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherEditComponent],
      imports: [
        MatDialogModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should create form', () => {
    const form = component.form;
    expect(form).toBeTruthy();
  });

  it('Should isDisable be true', () => {
    // expect(component.isDisable).toBeTruthy();
  });
});
