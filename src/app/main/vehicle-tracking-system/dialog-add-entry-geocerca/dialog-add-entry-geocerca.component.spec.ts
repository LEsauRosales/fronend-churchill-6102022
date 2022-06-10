import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEntryGeocercaComponent } from './dialog-add-entry-geocerca.component';

describe('DialogAddEntryGeocercaComponent', () => {
  let component: DialogAddEntryGeocercaComponent;
  let fixture: ComponentFixture<DialogAddEntryGeocercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEntryGeocercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEntryGeocercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
