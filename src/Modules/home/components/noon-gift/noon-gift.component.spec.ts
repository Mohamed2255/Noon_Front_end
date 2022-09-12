import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoonGiftComponent } from './noon-gift.component';

describe('NoonGiftComponent', () => {
  let component: NoonGiftComponent;
  let fixture: ComponentFixture<NoonGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoonGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoonGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
