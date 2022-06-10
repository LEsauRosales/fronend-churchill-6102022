import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDriversComponent } from './dialog-drivers.component';

describe('DialogDriversComponent', () => {
  let component: DialogDriversComponent;
  let fixture: ComponentFixture<DialogDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
