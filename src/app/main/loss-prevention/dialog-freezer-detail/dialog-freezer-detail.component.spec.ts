import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFreezerDetailComponent } from './dialog-freezer-detail.component';

describe('DialogFreezerDetailComponent', () => {
  let component: DialogFreezerDetailComponent;
  let fixture: ComponentFixture<DialogFreezerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFreezerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFreezerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
