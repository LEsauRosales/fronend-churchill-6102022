import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDTComponent } from './dialog-add-dt.component';

describe('DialogAddDTComponent', () => {
  let component: DialogAddDTComponent;
  let fixture: ComponentFixture<DialogAddDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
