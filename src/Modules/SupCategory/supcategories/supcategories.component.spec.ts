import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupcategoriesComponent } from './supcategories.component';

describe('SupcategoriesComponent', () => {
  let component: SupcategoriesComponent;
  let fixture: ComponentFixture<SupcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
