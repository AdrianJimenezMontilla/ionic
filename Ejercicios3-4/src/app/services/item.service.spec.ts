import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ProductServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });
});
