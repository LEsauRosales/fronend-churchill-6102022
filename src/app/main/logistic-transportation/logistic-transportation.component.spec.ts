import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticTransportationComponent } from './logistic-transportation.component';

describe('LogisticTransportationComponent', () => {
  let component: LogisticTransportationComponent;
  let fixture: ComponentFixture<LogisticTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticTransportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
