import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTwitterComponent } from './dialog-twitter.component';

describe('DialogTwitterComponent', () => {
  let component: DialogTwitterComponent;
  let fixture: ComponentFixture<DialogTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
