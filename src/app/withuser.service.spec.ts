import { TestBed } from '@angular/core/testing';

import { WithuserService } from './withuser.service';

describe('WithuserService', () => {
  let service: WithuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
