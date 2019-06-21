import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainCategoryComponent } from './admin-main-category.component';

describe('AdminMainCategoryComponent', () => {
  let component: AdminMainCategoryComponent;
  let fixture: ComponentFixture<AdminMainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
