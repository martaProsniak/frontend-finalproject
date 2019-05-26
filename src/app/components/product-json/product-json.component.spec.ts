import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductJsonComponent } from './product-json.component';

describe('ProductJsonComponent', () => {
  let component: ProductJsonComponent;
  let fixture: ComponentFixture<ProductJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
