import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCayegoriesComponent } from './footer-cayegories.component';

describe('FooterCayegoriesComponent', () => {
  let component: FooterCayegoriesComponent;
  let fixture: ComponentFixture<FooterCayegoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCayegoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCayegoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
