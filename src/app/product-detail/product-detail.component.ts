import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
// @Input('data') product:Product;
  constructor(private productService: ProductService, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
this.getProductdetail();

  }
  getProductdetail(){
      this.route.params.subscribe( param => {
        console.log(param);
        this.productService.getProductdetail(param.productID).subscribe(data =>{
           this.product = data;
        })
      }); 
  }
}
