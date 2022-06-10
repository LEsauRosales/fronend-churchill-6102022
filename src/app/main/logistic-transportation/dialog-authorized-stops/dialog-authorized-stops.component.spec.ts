import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAuthorizedStopsComponent } from './dialog-authorized-stops.component';

describe('DialogAuthorizedStopsComponent', () => {
  let component: DialogAuthorizedStopsComponent;
  let fixture: ComponentFixture<DialogAuthorizedStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAuthorizedStopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAuthorizedStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
