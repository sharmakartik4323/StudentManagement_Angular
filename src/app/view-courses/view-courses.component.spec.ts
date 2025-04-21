import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCoursesComponent } from './view-courses.component';
import { describe, beforeEach, it } from 'node:test';

describe('ViewCoursesComponent', () => {
  let component: ViewCoursesComponent;
  let fixture: ComponentFixture<ViewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
