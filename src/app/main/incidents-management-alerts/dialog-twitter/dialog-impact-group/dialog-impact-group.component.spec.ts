import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImpactGroupComponent } from './dialog-impact-group.component';

describe('DialogImpactGroupComponent', () => {
  let component: DialogImpactGroupComponent;
  let fixture: ComponentFixture<DialogImpactGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogImpactGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogImpactGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
