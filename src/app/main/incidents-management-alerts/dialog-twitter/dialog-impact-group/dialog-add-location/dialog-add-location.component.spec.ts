import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddLocationComponent } from './dialog-add-location.component';

describe('DialogAddLocationComponent', () => {
  let component: DialogAddLocationComponent;
  let fixture: ComponentFixture<DialogAddLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
