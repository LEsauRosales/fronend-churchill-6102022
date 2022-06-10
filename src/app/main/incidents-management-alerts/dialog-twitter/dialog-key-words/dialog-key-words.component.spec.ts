import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKeyWordsComponent } from './dialog-key-words.component';

describe('DialogKeyWordsComponent', () => {
  let component: DialogKeyWordsComponent;
  let fixture: ComponentFixture<DialogKeyWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogKeyWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKeyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
