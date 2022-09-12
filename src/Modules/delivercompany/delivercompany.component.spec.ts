import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivercompanyComponent } from './delivercompany.component';

describe('DelivercompanyComponent', () => {
  let component: DelivercompanyComponent;
  let fixture: ComponentFixture<DelivercompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivercompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelivercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
