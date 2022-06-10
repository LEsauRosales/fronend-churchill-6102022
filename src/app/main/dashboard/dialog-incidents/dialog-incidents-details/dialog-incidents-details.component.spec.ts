import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIncidentsDetailsComponent } from './dialog-incidents-details.component';

describe('DialogIncidentsDetailsComponent', () => {
  let component: DialogIncidentsDetailsComponent;
  let fixture: ComponentFixture<DialogIncidentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIncidentsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIncidentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
