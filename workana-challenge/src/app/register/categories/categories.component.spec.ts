import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCategoriesComponent } from './categories.component';

describe('RegisterCategoriesComponent', () => {
  let component: RegisterCategoriesComponent;
  let fixture: ComponentFixture<RegisterCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCategoriesComponent]
    });
    fixture = TestBed.createComponent(RegisterCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
