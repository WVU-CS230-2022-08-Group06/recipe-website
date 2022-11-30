import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerRecipesComponent } from './dinner-recipes.component';

describe('DinnerRecipesComponent', () => {
  let component: DinnerRecipesComponent;
  let fixture: ComponentFixture<DinnerRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
