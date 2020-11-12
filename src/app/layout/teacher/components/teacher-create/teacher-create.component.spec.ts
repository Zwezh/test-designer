import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { TeacherCreateComponent } from './teacher-create.component';




describe('CreateEditTeacherComponent', () => {

  let component: TeacherCreateComponent;
  let fixture: ComponentFixture<TeacherCreateComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherCreateComponent],
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
    fixture = TestBed.createComponent(TeacherCreateComponent);
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
