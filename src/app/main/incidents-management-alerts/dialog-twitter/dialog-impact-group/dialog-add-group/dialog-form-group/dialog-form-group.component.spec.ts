import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormGroupComponent } from './dialog-form-group.component';

describe('DialogFormGroupComponent', () => {
  let component: DialogFormGroupComponent;
  let fixture: ComponentFixture<DialogFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
