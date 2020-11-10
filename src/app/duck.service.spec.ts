import { TestBed } from '@angular/core/testing';

import { DuckService } from './duck.service';

describe('DuckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuckService = TestBed.get(DuckService);
    expect(service).toBeTruthy();
  });
});
