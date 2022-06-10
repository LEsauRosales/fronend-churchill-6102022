import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstructiveComponent } from './dialog-instructive.component';

describe('DialogInstructiveComponent', () => {
  let component: DialogInstructiveComponent;
  let fixture: ComponentFixture<DialogInstructiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInstructiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
