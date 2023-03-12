import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopProductListComponent } from './eshop-product-list.component';

describe('EshopProductListComponent', () => {
  let component: EshopProductListComponent;
  let fixture: ComponentFixture<EshopProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EshopProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
