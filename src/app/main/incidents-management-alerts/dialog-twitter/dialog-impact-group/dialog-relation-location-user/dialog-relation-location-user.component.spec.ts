import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRelationLocationUserComponent } from './dialog-relation-location-user.component';

describe('DialogRelationLocationUserComponent', () => {
  let component: DialogRelationLocationUserComponent;
  let fixture: ComponentFixture<DialogRelationLocationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRelationLocationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRelationLocationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
