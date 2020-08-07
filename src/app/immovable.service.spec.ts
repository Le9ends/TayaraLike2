import { TestBed } from '@angular/core/testing';

import { ImmovableService } from './immovable.service';

describe('ImmovableService', () => {
  let service: ImmovableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmovableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
