import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../product";
import{ProductService} from "../product.service"
// import { ProductService } from "../service/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';
@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  id: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  sub: any;

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
      this.product = this.productService.getProduct(id);
    });
  }
  updateProduct() {
    this.productService.editProduct(this.product);
    this.router.navigate(["/product-list"]);
  }
}
