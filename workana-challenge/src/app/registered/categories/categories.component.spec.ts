import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCategoriesComponent } from './categories.component';

describe('RegisteredCategoriesComponent', () => {
  let component: RegisteredCategoriesComponent;
  let fixture: ComponentFixture<RegisteredCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredCategoriesComponent]
    });
    fixture = TestBed.createComponent(RegisteredCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
