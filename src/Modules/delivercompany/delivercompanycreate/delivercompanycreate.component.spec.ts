import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivercompanycreateComponent } from './delivercompanycreate.component';

describe('DelivercompanycreateComponent', () => {
  let component: DelivercompanycreateComponent;
  let fixture: ComponentFixture<DelivercompanycreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivercompanycreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelivercompanycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
