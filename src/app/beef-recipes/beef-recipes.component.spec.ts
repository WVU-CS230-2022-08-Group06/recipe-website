import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefRecipesComponent } from './beef-recipes.component';

describe('BeefRecipesComponent', () => {
  let component: BeefRecipesComponent;
  let fixture: ComponentFixture<BeefRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeefRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeefRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
