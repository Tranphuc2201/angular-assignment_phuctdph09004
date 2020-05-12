import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../Product";
import{ProductService} from "../product.service"
// import { ProductService } from "../service/product.service";
import { Router, ActivatedRoute, Route } from "@angular/router";
import { from } from 'rxjs';
import { data } from '../MockData';
@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product ;
  id: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  sub: any;

  ngOnInit() {
   this.getProduct();
  }
  getProduct() {
    this.route.params.subscribe(param =>{
      this.productService.getProductdetail(param.productID).subscribe(data =>{
          this.product = data;
      // this.productService.getProducts(param.productID).subscribe(data =>{
      //   this.product = data;
    })
  })
  }
  updateProduct(){
this.productService.updateProduct(this.product).subscribe(data =>{
this.router.navigateByUrl('/product/list');

})
alert("Update thành công!")
  }
}
