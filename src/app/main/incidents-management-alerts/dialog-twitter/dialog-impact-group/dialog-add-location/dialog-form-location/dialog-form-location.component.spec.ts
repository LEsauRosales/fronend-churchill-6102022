import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormLocationComponent } from './dialog-form-location.component';

describe('DialogFormLocationComponent', () => {
  let component: DialogFormLocationComponent;
  let fixture: ComponentFixture<DialogFormLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
