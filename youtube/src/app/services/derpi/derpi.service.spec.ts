import { TestBed, inject } from '@angular/core/testing';

import { DerpiService } from './derpi.service';

describe('DerpiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DerpiService]
    });
  });

  it('should be created', inject([DerpiService], (service: DerpiService) => {
    expect(service).toBeTruthy();
  }));
});
