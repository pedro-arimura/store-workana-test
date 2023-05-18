import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: RegisteredProductsComponent;
  let fixture: ComponentFixture<RegisteredProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredProductsComponent]
    });
    fixture = TestBed.createComponent(RegisteredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
