import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActivateProtocolComponent } from './dialog-activate-protocol.component';

describe('DialogActivateProtocolComponent', () => {
  let component: DialogActivateProtocolComponent;
  let fixture: ComponentFixture<DialogActivateProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogActivateProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActivateProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
