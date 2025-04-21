import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllEnrollmentsComponent } from './all-enrollments.component';
import { describe, beforeEach, it } from 'node:test';

describe('AllEnrollmentsComponent', () => {
  let component: AllEnrollmentsComponent;
  let fixture: ComponentFixture<AllEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllEnrollmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
