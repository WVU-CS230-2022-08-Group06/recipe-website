import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafoodComponent } from './seafood.component';

describe('SeafoodComponent', () => {
  let component: SeafoodComponent;
  let fixture: ComponentFixture<SeafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeafoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
