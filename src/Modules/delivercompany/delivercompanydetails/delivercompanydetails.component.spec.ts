import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivercompanydetailsComponent } from './delivercompanydetails.component';

describe('DelivercompanydetailsComponent', () => {
  let component: DelivercompanydetailsComponent;
  let fixture: ComponentFixture<DelivercompanydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivercompanydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelivercompanydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
