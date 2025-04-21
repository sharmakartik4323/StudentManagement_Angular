import { TestBed } from '@angular/core/testing';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { describe, beforeEach, it } from 'node:test';

describe('JwtInterceptorService', () => {
  let service: JwtInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtInterceptorService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
