import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleTrackingDetailsComponent } from './dialog-vehicle-tracking-details.component';

describe('DialogVehicleTrakingDetailsComponent', () => {
  let component: DialogVehicleTrackingDetailsComponent;
  let fixture: ComponentFixture<DialogVehicleTrackingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehicleTrackingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehicleTrackingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
