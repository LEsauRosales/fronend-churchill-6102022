import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossPreventionComponent } from './loss-prevention.component';

describe('LossPreventionComponent', () => {
  let component: LossPreventionComponent;
  let fixture: ComponentFixture<LossPreventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LossPreventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LossPreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
