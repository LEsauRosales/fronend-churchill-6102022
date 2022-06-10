import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTransportDetailComponent } from './dialog-transport-detail.component';

describe('DialogTransportDetailComponent', () => {
  let component: DialogTransportDetailComponent;
  let fixture: ComponentFixture<DialogTransportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTransportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTransportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
