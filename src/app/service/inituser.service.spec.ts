import { TestBed } from '@angular/core/testing';

import { InituserService } from './inituser.service';

describe('InituserService', () => {
  let service: InituserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InituserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
