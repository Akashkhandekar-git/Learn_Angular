import { TestBed } from '@angular/core/testing';

import { APICallsService } from '../api-calls.service';

describe('APICallsService', () => {
  let service: APICallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
