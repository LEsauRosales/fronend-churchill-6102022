import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCuentasComponent } from './dialog-cuentas.component';

describe('DialogCuentasComponent', () => {
  let component: DialogCuentasComponent;
  let fixture: ComponentFixture<DialogCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
