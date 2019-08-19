import { TestBed } from '@angular/core/testing';

import { EspisodesService } from './espisodes.service';

describe('EspisodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspisodesService = TestBed.get(EspisodesService);
    expect(service).toBeTruthy();
  });
});
