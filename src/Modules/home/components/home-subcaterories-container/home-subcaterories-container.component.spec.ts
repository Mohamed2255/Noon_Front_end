import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubcateroriesContainerComponent } from './home-subcaterories-container.component';

describe('HomeSubcateroriesContainerComponent', () => {
  let component: HomeSubcateroriesContainerComponent;
  let fixture: ComponentFixture<HomeSubcateroriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSubcateroriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubcateroriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
