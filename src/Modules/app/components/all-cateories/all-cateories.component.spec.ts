import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCateoriesComponent } from './all-cateories.component';

describe('AllCateoriesComponent', () => {
  let component: AllCateoriesComponent;
  let fixture: ComponentFixture<AllCateoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCateoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCateoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
