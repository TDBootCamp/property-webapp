import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceSearchBarComponent } from './ecommerce-search-bar.component';

describe('EcommerceSearchBarComponent', () => {
  let component: EcommerceSearchBarComponent;
  let fixture: ComponentFixture<EcommerceSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
