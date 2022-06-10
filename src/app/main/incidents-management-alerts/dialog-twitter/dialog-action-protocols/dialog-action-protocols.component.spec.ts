import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionProtocolsComponent } from './dialog-action-protocols.component';

describe('DialogActionProtocolsComponent', () => {
  let component: DialogActionProtocolsComponent;
  let fixture: ComponentFixture<DialogActionProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogActionProtocolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
