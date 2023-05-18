import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredOrdersComponent } from './orders.component';

describe('RegisteredOrdersComponent', () => {
  let component: RegisteredOrdersComponent;
  let fixture: ComponentFixture<RegisteredOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredOrdersComponent]
    });
    fixture = TestBed.createComponent(RegisteredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
