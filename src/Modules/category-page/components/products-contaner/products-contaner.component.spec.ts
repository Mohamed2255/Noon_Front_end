import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsContanerComponent } from './products-contaner.component';

describe('ProductsContanerComponent', () => {
  let component: ProductsContanerComponent;
  let fixture: ComponentFixture<ProductsContanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsContanerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsContanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
