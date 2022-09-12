import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivercompanyupdateComponent } from './delivercompanyupdate.component';

describe('DelivercompanyupdateComponent', () => {
  let component: DelivercompanyupdateComponent;
  let fixture: ComponentFixture<DelivercompanyupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivercompanyupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelivercompanyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
