import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

import { TeachersAddComponent } from './teachers-add.component';

describe('TeachersAddComponent', () => {
  let component: TeachersAddComponent;
  let fixture: ComponentFixture<TeachersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersAddComponent],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersAddComponent);
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
    expect(component.isDisable).toBeTruthy();
  });
});
