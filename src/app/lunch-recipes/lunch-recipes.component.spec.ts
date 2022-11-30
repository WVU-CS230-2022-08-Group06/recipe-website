import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchRecipesComponent } from './lunch-recipes.component';

describe('LunchRecipesComponent', () => {
  let component: LunchRecipesComponent;
  let fixture: ComponentFixture<LunchRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
