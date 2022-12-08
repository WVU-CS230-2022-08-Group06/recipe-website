import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectRecipesComponent } from './inspect-recipes.component';

describe('InspectRecipesComponent', () => {
  let component: InspectRecipesComponent;
  let fixture: ComponentFixture<InspectRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
