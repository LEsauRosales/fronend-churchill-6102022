import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSecurityDetailComponent } from './dialog-security-detail.component';

describe('DialogSecurityDetailComponent', () => {
  let component: DialogSecurityDetailComponent;
  let fixture: ComponentFixture<DialogSecurityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSecurityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSecurityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
