import { TestBed, inject } from '@angular/core/testing';

import { YtApiServiceService } from './yt-api-service.service';

describe('YtApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YtApiServiceService]
    });
  });

  it('should be created', inject([YtApiServiceService], (service: YtApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
