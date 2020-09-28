import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { Teacher } from '@appApi';
import { TeachersStore } from '@appStores';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: TeachersStore;

  const expectedTeacher: Teacher = {
    id: null,
    position: '',
    name: '',
    lastName: '',
    patronymic: '',
    password: '1'
  };


  const storeStub = {
    getCurrentTeacher$: (id: number) => of(expectedTeacher)
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        MatToolbarModule,
        MatDialogModule
      ],
      providers: [{ provide: TeachersStore, useValue: storeStub }]
    })
      .compileComponents();

    store = TestBed.inject(TeachersStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Check application's title`, () => {
    const element: HTMLElement = fixture.nativeElement;
    const title = element.querySelector('h1');
    expect(title).toBeTruthy();
  });
});
