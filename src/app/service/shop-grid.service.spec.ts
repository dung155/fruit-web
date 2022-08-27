import { TestBed } from '@angular/core/testing';

import { ShopGridService } from './shop-grid.service';

describe('ShopGridService', () => {
  let service: ShopGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
