import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsComponent } from './carousels.component';

describe('CarouselsComponent', () => {
  let component: CarouselsComponent;
  let fixture: ComponentFixture<CarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
