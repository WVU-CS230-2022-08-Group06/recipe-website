import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianRecipesComponent } from './indian-recipes.component';

describe('IndianRecipesComponent', () => {
  let component: IndianRecipesComponent;
  let fixture: ComponentFixture<IndianRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
