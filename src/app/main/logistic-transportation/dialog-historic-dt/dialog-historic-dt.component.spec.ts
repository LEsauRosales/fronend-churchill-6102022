import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHistoricDTComponent } from './dialog-historic-dt.component';

describe('DialogHistoricDTComponent', () => {
  let component: DialogHistoricDTComponent;
  let fixture: ComponentFixture<DialogHistoricDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHistoricDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHistoricDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
