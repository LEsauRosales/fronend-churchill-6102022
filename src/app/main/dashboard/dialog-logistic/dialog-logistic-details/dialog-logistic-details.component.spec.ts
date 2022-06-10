import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogisticDetailsComponent } from './dialog-logistic-details.component';

describe('DialogLogisticDetailsComponent', () => {
  let component: DialogLogisticDetailsComponent;
  let fixture: ComponentFixture<DialogLogisticDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLogisticDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogisticDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
