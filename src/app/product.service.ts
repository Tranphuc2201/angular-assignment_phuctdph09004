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


  
  getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.api);
   //return this.products;
 }
 addProduct(product): Observable<Product>{
   return this.http.post<Product>(`${this.api}`, product);
  
}
removeProduct(id):Observable<Product>{
  return this.http.delete<Product>(`${this.api}/${id}`); 
  // this.products =  this.products.filter(product => product.id !== id);
}

getProductdetail(id):Observable<Product>{
  // console.log(id);
  return this.http.get<Product>(`${this.api}/${id}`);   
   //return this.products;
 }
updateProduct(product): Observable<Product>{
  return this.http.put<Product>(`${this.api}/${product.id}`,product); 
 

}
}
