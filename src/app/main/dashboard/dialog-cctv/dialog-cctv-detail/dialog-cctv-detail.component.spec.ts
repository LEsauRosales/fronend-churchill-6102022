import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCctvDetailComponent } from './dialog-cctv-detail.component';

describe('DialogCctvDetailComponent', () => {
  let component: DialogCctvDetailComponent;
  let fixture: ComponentFixture<DialogCctvDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCctvDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCctvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
