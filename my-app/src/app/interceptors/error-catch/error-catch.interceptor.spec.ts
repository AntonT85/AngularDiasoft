import { TestBed } from '@angular/core/testing';

import { ErrorCatchInterceptor } from './error-catch.interceptor';

describe('ErrorCatchInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorCatchInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorCatchInterceptor = TestBed.inject(ErrorCatchInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
