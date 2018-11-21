import { TestBed } from '@angular/core/testing';

import { CheckDateService } from './check-date.service';

describe('CheckDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckDateService = TestBed.get(CheckDateService);
    expect(service).toBeTruthy();
  });
});
