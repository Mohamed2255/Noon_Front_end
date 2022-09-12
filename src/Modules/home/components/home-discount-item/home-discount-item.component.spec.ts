import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiscountItemComponent } from './home-discount-item.component';

describe('HomeDiscountItemComponent', () => {
  let component: HomeDiscountItemComponent;
  let fixture: ComponentFixture<HomeDiscountItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDiscountItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDiscountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
