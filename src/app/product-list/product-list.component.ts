import { Component, OnInit } from "@angular/core";
// import { data } from '../MockData';
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  // product: Product = new Product();

  constructor(
    private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
   
  }
  detailProduct(product) {
    this.selected = product;
    // console.log(this.selected);
  }
  removeItem(id) {
    this.products = this.products.filter(product => product.id !== id);
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    // this.products = this.productService.getProducts();
    // console.log(this.getProducts);
  }
  editItem(id) {
    this.router.navigate(["/product-edit", id]);
  }
}
