import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyEmployeeNumberComponent } from './emergency-employee-number.component';

describe('EmergencyEmployeeNumberComponent', () => {
  let component: EmergencyEmployeeNumberComponent;
  let fixture: ComponentFixture<EmergencyEmployeeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyEmployeeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyEmployeeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
