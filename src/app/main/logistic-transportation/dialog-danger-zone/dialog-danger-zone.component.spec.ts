import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDangerZoneComponent } from './dialog-danger-zone.component';

describe('DialogDangerZoneComponent', () => {
  let component: DialogDangerZoneComponent;
  let fixture: ComponentFixture<DialogDangerZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDangerZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDangerZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
