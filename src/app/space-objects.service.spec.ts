import { TestBed } from '@angular/core/testing';

import { SpaceObjectsService } from './space-objects.service';

describe('SpaceObjectsService', () => {
  let service: SpaceObjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceObjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
