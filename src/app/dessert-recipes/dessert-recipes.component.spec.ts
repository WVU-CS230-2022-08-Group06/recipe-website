import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertRecipesComponent } from './dessert-recipes.component';

describe('DessertRecipesComponent', () => {
  let component: DessertRecipesComponent;
  let fixture: ComponentFixture<DessertRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
