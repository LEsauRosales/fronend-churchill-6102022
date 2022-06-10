import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRelationGroupUserComponent } from './dialog-relation-group-user.component';

describe('DialogRelationGroupUserComponent', () => {
  let component: DialogRelationGroupUserComponent;
  let fixture: ComponentFixture<DialogRelationGroupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRelationGroupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRelationGroupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
