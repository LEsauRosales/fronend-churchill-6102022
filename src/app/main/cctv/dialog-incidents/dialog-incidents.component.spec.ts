import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIncidentsComponent } from './dialog-incidents.component';

describe('DialogIncidentsComponent', () => {
  let component: DialogIncidentsComponent;
  let fixture: ComponentFixture<DialogIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIncidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
