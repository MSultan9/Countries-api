import { TestBed } from '@angular/core/testing';

import { CountryDetailService } from './country-detail.service';

describe('CountryDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryDetailService = TestBed.get(CountryDetailService);
    expect(service).toBeTruthy();
  });
});
