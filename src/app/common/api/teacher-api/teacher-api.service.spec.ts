import { inject, TestBed } from '@angular/core/testing';

import { TeacherApiService } from './teacher-api.service';

describe('Service: TeacherApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherApiService]
    });
  });

  it('should ...', inject([TeacherApiService], (service: TeacherApiService) => {
    expect(service).toBeTruthy();
  }));
});
