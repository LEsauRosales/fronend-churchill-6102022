import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsManagementAlertsComponent } from './incidents-management-alerts.component';

describe('IncidentsManagementAlertsComponent', () => {
  let component: IncidentsManagementAlertsComponent;
  let fixture: ComponentFixture<IncidentsManagementAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsManagementAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsManagementAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
