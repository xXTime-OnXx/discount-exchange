import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountPage } from './add-discount.page';

describe('AddDiscountPage', () => {
  let component: AddDiscountPage;
  let fixture: ComponentFixture<AddDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
