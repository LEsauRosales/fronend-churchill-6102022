import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackingSystemComponent } from './vehicle-tracking-system.component';

describe('VehicleTrackingSystemComponent', () => {
  let component: VehicleTrackingSystemComponent;
  let fixture: ComponentFixture<VehicleTrackingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTrackingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTrackingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
