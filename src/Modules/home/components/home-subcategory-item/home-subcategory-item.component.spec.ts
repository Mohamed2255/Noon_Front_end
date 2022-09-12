import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubcategoryItemComponent } from './home-subcategory-item.component';

describe('HomeSubcategoryItemComponent', () => {
  let component: HomeSubcategoryItemComponent;
  let fixture: ComponentFixture<HomeSubcategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSubcategoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubcategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
