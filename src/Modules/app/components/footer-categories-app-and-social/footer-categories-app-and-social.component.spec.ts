import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCategoriesAppAndSocialComponent } from './footer-categories-app-and-social.component';

describe('FooterCategoriesAppAndSocialComponent', () => {
  let component: FooterCategoriesAppAndSocialComponent;
  let fixture: ComponentFixture<FooterCategoriesAppAndSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCategoriesAppAndSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCategoriesAppAndSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
