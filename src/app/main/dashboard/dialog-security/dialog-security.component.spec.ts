import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSecurityComponent } from './dialog-security.component';

describe('DialogSecurityComponent', () => {
  let component: DialogSecurityComponent;
  let fixture: ComponentFixture<DialogSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
