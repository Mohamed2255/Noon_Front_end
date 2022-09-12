import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcateogriesContainerComponent } from './subcateogries-container.component';

describe('SubcateogriesContainerComponent', () => {
  let component: SubcateogriesContainerComponent;
  let fixture: ComponentFixture<SubcateogriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcateogriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcateogriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
