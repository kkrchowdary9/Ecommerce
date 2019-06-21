import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCategoriesComponent } from './shop-by-categories.component';

describe('ShopByCategoriesComponent', () => {
  let component: ShopByCategoriesComponent;
  let fixture: ComponentFixture<ShopByCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopByCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
