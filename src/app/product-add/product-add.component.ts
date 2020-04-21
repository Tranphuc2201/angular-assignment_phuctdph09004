import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private route: Router 
  ) { }

  ngOnInit() {
  }
  addNewProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
       this.route.navigateByUrl('/product/list')
       });
        // alert("Bạn đã thêm thành công!");
  }
}