import { inject, TestBed } from '@angular/core/testing';
import { Teacher, TeachersApiService } from '@appApi';
import { PersistanceService } from '@appServices';
import { of } from 'rxjs';

describe('Service: PersistanceService', () => {
  let persistanceService: PersistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistanceService]
    });
    persistanceService = TestBed.inject(PersistanceService);
    const store = {};

    spyOn(localStorage, 'getItem').and.callFake((key) => store[key]);
    spyOn(localStorage, 'setItem').and.callFake(
      (key, value): string => (store[key] = value + '')
    );
  });

  const expectedStorageKey = 'key';
  const expectedStorageValue = 'value';

  it('should be got valid value from storage', () => {
    persistanceService.set(expectedStorageKey, expectedStorageValue);
    expect(expectedStorageValue).toEqual(
      persistanceService.get(expectedStorageKey)
    );
  });
});
