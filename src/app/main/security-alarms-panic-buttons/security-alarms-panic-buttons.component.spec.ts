import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAlarmsPanicButtonsComponent } from './security-alarms-panic-buttons.component';

describe('SecurityAlarmsPanicButtonsComponent', () => {
  let component: SecurityAlarmsPanicButtonsComponent;
  let fixture: ComponentFixture<SecurityAlarmsPanicButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityAlarmsPanicButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAlarmsPanicButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
