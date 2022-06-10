import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleTrackingComponent } from './dialog-vehicle-tracking.component';

describe('DialogVehicleTrackingComponent', () => {
  let component: DialogVehicleTrackingComponent;
  let fixture: ComponentFixture<DialogVehicleTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehicleTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehicleTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
