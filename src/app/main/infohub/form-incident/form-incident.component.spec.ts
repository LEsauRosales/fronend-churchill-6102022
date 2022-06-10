import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncidentComponent } from './form-incident.component';

describe('FormIncidentComponent', () => {
  let component: FormIncidentComponent;
  let fixture: ComponentFixture<FormIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
