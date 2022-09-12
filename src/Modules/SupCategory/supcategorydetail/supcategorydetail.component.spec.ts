import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupcategorydetailComponent } from './supcategorydetail.component';

describe('SupcategorydetailComponent', () => {
  let component: SupcategorydetailComponent;
  let fixture: ComponentFixture<SupcategorydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupcategorydetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupcategorydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
