import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormAlertComponent } from './dialog-form-alert.component';

describe('DialogFormAlertComponent', () => {
  let component: DialogFormAlertComponent;
  let fixture: ComponentFixture<DialogFormAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
