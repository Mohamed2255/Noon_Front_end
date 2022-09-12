import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdetianlDetailsComponent } from './adetianl-details.component';

describe('AdetianlDetailsComponent', () => {
  let component: AdetianlDetailsComponent;
  let fixture: ComponentFixture<AdetianlDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdetianlDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdetianlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
