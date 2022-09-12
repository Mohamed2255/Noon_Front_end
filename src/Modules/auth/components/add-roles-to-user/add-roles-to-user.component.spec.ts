import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolesToUserComponent } from './add-roles-to-user.component';

describe('AddRolesToUserComponent', () => {
  let component: AddRolesToUserComponent;
  let fixture: ComponentFixture<AddRolesToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRolesToUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRolesToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
