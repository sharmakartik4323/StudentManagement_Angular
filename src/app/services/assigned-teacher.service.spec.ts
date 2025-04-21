import { TestBed } from '@angular/core/testing';
import { AssignedTeacherService } from './assigned-teacher.service';
import { beforeEach, describe, it } from 'node:test';

describe('AssignedTeacherService', () => {
  let service: AssignedTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedTeacherService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
