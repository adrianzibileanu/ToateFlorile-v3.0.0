import {Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  delProduct?: Product;
  idProduct?: number;
  image?: string;




  constructor(private productService: ProductService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getImage(params.id).subscribe(image => {
        this.image = URL.createObjectURL(image);
      });
    });
    this.listPatients();
  }

  listPatients(): void{
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  delete(id: string): void{
    this.productService.deleteProduct(id).subscribe(() => window.location.reload());
  }
}
