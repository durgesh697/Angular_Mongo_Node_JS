import { TestBed, inject } from '@angular/core/testing';

import { CartCounterService } from './cart-counter.service';

describe('CartCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartCounterService]
    });
  });

  it('should be created', inject([CartCounterService], (service: CartCounterService) => {
    expect(service).toBeTruthy();
  }));
});
