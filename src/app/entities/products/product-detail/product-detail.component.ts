import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Product} from "../product.model";
import { Location } from  '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.getProduct();
  }

  getProduct(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

}
