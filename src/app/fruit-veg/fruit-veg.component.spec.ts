import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitVegComponent } from './fruit-veg.component';

describe('FruitVegComponent', () => {
  let component: FruitVegComponent;
  let fixture: ComponentFixture<FruitVegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitVegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
