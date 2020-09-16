import { inject, TestBed } from '@angular/core/testing';

import { TeachersApiService } from './teachers-api.service';

describe('Service: TeacherApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeachersApiService]
    });
  });

  it('should ...', inject([TeachersApiService], (service: TeachersApiService) => {
    expect(service).toBeTruthy();
  }));
});
