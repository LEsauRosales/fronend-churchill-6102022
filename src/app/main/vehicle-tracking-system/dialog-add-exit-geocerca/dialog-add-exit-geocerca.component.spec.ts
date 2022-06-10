import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddExitGeocercaComponent } from './dialog-add-exit-geocerca.component';

describe('DialogAddExitGeocercaComponent', () => {
  let component: DialogAddExitGeocercaComponent;
  let fixture: ComponentFixture<DialogAddExitGeocercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddExitGeocercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddExitGeocercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
