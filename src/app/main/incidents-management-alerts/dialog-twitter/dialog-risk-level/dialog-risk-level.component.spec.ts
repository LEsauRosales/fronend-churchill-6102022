import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRiskLevelComponent } from './dialog-risk-level.component';

describe('DialogRiskLevelComponent', () => {
  let component: DialogRiskLevelComponent;
  let fixture: ComponentFixture<DialogRiskLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRiskLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRiskLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
