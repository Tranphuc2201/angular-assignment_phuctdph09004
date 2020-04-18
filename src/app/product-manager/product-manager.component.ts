import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  selected : Product;
  products: Product[];
  constructor(private productService: ProductService) { }
 ngOnInit(): void {
    this.getProducts();
  }
  removeItem(id){ 
    this.productService.removeProduct(id).subscribe(Response => {
      console.log(Response);
      this.products=this.products =  this.products.filter(product => product.id !== Response.id);

    })
  }
  
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products =data
      console.log(this.products)
    });
  }
  
}
 