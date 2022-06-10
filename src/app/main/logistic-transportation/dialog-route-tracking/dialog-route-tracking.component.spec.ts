import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRouteTrackingComponent } from './dialog-route-tracking.component';

describe('DialogRouteTrackingComponent', () => {
  let component: DialogRouteTrackingComponent;
  let fixture: ComponentFixture<DialogRouteTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRouteTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRouteTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
