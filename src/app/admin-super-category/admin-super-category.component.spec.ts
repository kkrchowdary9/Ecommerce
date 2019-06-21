import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuperCategoryComponent } from './admin-super-category.component';

describe('AdminSuperCategoryComponent', () => {
  let component: AdminSuperCategoryComponent;
  let fixture: ComponentFixture<AdminSuperCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSuperCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSuperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
