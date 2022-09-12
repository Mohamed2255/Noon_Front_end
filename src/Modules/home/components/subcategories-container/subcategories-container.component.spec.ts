import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesContainerComponent } from './subcategories-container.component';

describe('SubcategoriesContainerComponent', () => {
  let component: SubcategoriesContainerComponent;
  let fixture: ComponentFixture<SubcategoriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
