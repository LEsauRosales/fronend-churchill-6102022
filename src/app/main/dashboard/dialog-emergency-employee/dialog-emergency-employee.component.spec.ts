import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmergencyEmployeeComponent } from './dialog-emergency-employee.component';

describe('DialogEmergencyEmployeeComponent', () => {
  let component: DialogEmergencyEmployeeComponent;
  let fixture: ComponentFixture<DialogEmergencyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmergencyEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEmergencyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
