import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  // selected: Product;
  // products = data;
  api = "https://5e79bc2317314d0016133623.mockapi.io/product";
  constructor(
    private http: HttpClient
  ) {}
  
  // product: Product = new Product();
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }
  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  getProduct(id) : Observable<Product> {
    return this.http.get<Product>('${this.api}/${id}');
  }
  editProduct(product) {
    // const index = this.products.findIndex(e => e.id === product.id);
    // if (index === -1) {
    //   this.products.push(product);
    // } else {
    //   this.products[index] = product;
    // }
  }
}
