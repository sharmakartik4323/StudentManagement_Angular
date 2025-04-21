import { TestBed } from '@angular/core/testing';
import { RoleService } from './role.service';
import { describe, beforeEach, it } from 'node:test';

describe('RoleService', () => {
  let service: RoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
