import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDriverDetailComponent } from './dialog-driver-detail.component';

describe('DialogDriverDetailComponent', () => {
  let component: DialogDriverDetailComponent;
  let fixture: ComponentFixture<DialogDriverDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDriverDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDriverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
