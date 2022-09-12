import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiscountsContainerComponent } from './home-discounts-container.component';

describe('HomeDiscountsContainerComponent', () => {
  let component: HomeDiscountsContainerComponent;
  let fixture: ComponentFixture<HomeDiscountsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDiscountsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDiscountsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
