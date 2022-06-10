import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleDetailsComponent } from './dialog-vehicle-details.component';

describe('DialogVehicleDetailsComponent', () => {
  let component: DialogVehicleDetailsComponent;
  let fixture: ComponentFixture<DialogVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehicleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
