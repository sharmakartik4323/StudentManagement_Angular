import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';
import { describe, beforeEach, it } from 'node:test';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
