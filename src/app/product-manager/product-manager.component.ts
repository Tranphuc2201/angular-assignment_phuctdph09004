import { Component, OnInit } from '@angular/core';

import { data } from '../MockData';
import { ProductService } from "../product.service";
import { Product } from '../Product';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products = data;
  selected : Product;
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
     this.getProducts();
  }
  detailProduct(product){
    this.selected=product;
    // 
  }
  removeItem(id){
    this.products =  this.products.filter(product => product.id !== id);
  }
}
