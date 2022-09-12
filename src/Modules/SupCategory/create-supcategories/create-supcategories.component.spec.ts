import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupcategoriesComponent } from './create-supcategories.component';

describe('CreateSupcategoriesComponent', () => {
  let component: CreateSupcategoriesComponent;
  let fixture: ComponentFixture<CreateSupcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSupcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSupcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
