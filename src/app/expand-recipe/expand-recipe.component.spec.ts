import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandRecipeComponent } from './expand-recipe.component';

describe('ExpandRecipeComponent', () => {
  let component: ExpandRecipeComponent;
  let fixture: ComponentFixture<ExpandRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
