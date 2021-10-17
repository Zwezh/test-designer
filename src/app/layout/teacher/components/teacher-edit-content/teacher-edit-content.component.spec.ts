import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherEditForm } from '@appLayouts/teacher/shared';
import { TeacherActions } from '@appLayouts/teacher/shared/types';
import { TranslateModule } from '@ngx-translate/core';

import { TeacherEditContentComponent } from './teacher-edit-content.component';

describe('TeacherEditContentComponent', () => {
  let component: TeacherEditContentComponent;
  let fixture: ComponentFixture<TeacherEditContentComponent>;
  const form = new TeacherEditForm();
  const teacherActions = TeacherActions;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
          FormsModule,
          ReactiveFormsModule,
          MatCardModule,
          MatDialogModule,
          MatToolbarModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule,
          MatDividerModule,
          MatSelectModule,
          NoopAnimationsModule],
        declarations: [TeacherEditContentComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEditContentComponent);
    component = fixture.componentInstance;
    component.form = form;

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

  it('should emit on "Cancel" click', () => {
    spyOn(component.action, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.ts-cancel-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith(teacherActions.cancel);
  });

  it('should emit on "Save" click', () => {
    spyOn(component.action, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.ts-save-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.action.emit).toHaveBeenCalledWith(teacherActions.save);
  });
});
