import { TestBed } from '@angular/core/testing';

import { LolserverService } from './lolserver.service';

describe('LolserverService', () => {
  let service: LolserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
