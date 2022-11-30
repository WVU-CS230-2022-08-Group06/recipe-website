import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanRecipesComponent } from './american-recipes.component';

describe('AmericanRecipesComponent', () => {
  let component: AmericanRecipesComponent;
  let fixture: ComponentFixture<AmericanRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericanRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
