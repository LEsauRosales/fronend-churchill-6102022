import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCctvComponent } from './dialog-cctv.component';

describe('DialogCctvComponent', () => {
  let component: DialogCctvComponent;
  let fixture: ComponentFixture<DialogCctvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCctvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
