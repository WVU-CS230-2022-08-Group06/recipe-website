import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanRecipesComponent } from './mexican-recipes.component';

describe('MexicanRecipesComponent', () => {
  let component: MexicanRecipesComponent;
  let fixture: ComponentFixture<MexicanRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MexicanRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MexicanRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
