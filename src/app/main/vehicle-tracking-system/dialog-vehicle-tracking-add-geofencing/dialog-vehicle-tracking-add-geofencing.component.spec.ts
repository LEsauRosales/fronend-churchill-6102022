import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleTrackingAddGeofencingComponent } from './dialog-vehicle-tracking-add-geofencing.component';

describe('DialogVehicleTrackingAddGeofencingComponent', () => {
  let component: DialogVehicleTrackingAddGeofencingComponent;
  let fixture: ComponentFixture<DialogVehicleTrackingAddGeofencingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehicleTrackingAddGeofencingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehicleTrackingAddGeofencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
