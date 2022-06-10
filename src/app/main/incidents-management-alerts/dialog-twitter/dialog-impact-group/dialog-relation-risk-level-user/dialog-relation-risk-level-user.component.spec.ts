import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRelationRiskLevelUserComponent } from './dialog-relation-risk-level-user.component';

describe('DialogRelationRiskLevelUserComponent', () => {
  let component: DialogRelationRiskLevelUserComponent;
  let fixture: ComponentFixture<DialogRelationRiskLevelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRelationRiskLevelUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRelationRiskLevelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
