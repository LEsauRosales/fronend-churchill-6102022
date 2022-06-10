import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormAccountComponent } from './dialog-form-account.component';

describe('DialogFormAccountComponent', () => {
  let component: DialogFormAccountComponent;
  let fixture: ComponentFixture<DialogFormAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
