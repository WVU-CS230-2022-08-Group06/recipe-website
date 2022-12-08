import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCardsComponent } from './live-cards.component';

describe('LiveCardsComponent', () => {
  let component: LiveCardsComponent;
  let fixture: ComponentFixture<LiveCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
