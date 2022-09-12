import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopRightsComponent } from './footer-cop-rights.component';

describe('FooterCopRightsComponent', () => {
  let component: FooterCopRightsComponent;
  let fixture: ComponentFixture<FooterCopRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCopRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCopRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
