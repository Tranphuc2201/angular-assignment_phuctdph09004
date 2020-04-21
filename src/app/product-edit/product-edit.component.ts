import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../Product";
import{ProductService} from "../product.service";
import { Router, ActivatedRoute, Route } from "@angular/router";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
   this.getProduct();
  }
  
   getProduct() {

    this.route.params.subscribe(param => {this.productService.getProduct(param.productID).
    subscribe(data => (this.product = data));
    });
  }
UpdateProduct() {
    console.log(this.product);
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/admin/dashboard");
      
    });
    alert("Bạn đã update thành công!");
  }

}
