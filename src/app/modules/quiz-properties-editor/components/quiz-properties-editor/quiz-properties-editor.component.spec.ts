import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuizPropertiesEditorComponent } from '@appModules/quiz-properties-editor';
import { TranslateModule } from '@ngx-translate/core';

describe('QuizPropertiesEditorComponent', () => {
  let component: QuizPropertiesEditorComponent;
  let fixture: ComponentFixture<QuizPropertiesEditorComponent>;

  const expectedSavedProperties = { name: 'Name', discipline: 'Discipline' };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslateModule.forRoot(),
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
          NoopAnimationsModule
        ],
        declarations: [QuizPropertiesEditorComponent],
        providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: { close: (value) => value } }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPropertiesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Quiz properties editor dialog should be closed by onCancel method', () => {
    spyOn(component.dialogRef, 'close').and.callThrough();
    fixture.detectChanges();
    component.onCancel();
    expect(component.dialogRef.close).toHaveBeenCalledWith();
  });

  it('Quiz properties editor dialog should be closed by onSave method', () => {
    spyOn(component.dialogRef, 'close').and.callThrough();
    fixture.detectChanges();
    component.form.name.setValue(expectedSavedProperties.name);
    component.form.discipline.setValue(expectedSavedProperties.discipline);
    component.onSave();
    expect(component.dialogRef.close).toHaveBeenCalledWith(
      expectedSavedProperties
    );
  });
});
