import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfastRecipesComponent } from './bfast-recipes.component';

describe('BfastRecipesComponent', () => {
  let component: BfastRecipesComponent;
  let fixture: ComponentFixture<BfastRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfastRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfastRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
