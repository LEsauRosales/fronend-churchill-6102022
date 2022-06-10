import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSpeedComponent } from './driver-speed.component';

describe('DriverSpeedComponent', () => {
  let component: DriverSpeedComponent;
  let fixture: ComponentFixture<DriverSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
