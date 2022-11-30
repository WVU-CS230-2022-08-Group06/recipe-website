import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreanRecipesComponent } from './korean-recipes.component';

describe('KoreanRecipesComponent', () => {
  let component: KoreanRecipesComponent;
  let fixture: ComponentFixture<KoreanRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoreanRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoreanRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
