import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogisticComponent } from './dialog-logistic.component';

describe('DialogLogisticComponent', () => {
  let component: DialogLogisticComponent;
  let fixture: ComponentFixture<DialogLogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLogisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
