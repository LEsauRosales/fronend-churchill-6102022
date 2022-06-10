import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehiclesComponent } from './dialog-vehicles.component';

describe('DialogVehiclesComponent', () => {
  let component: DialogVehiclesComponent;
  let fixture: ComponentFixture<DialogVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
