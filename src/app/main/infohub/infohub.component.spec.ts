import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohubComponent } from './infohub.component';

describe('InfohubComponent', () => {
  let component: InfohubComponent;
  let fixture: ComponentFixture<InfohubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfohubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfohubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
