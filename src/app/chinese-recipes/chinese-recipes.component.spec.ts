import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseRecipesComponent } from './chinese-recipes.component';

describe('ChineseRecipesComponent', () => {
  let component: ChineseRecipesComponent;
  let fixture: ComponentFixture<ChineseRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChineseRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineseRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
