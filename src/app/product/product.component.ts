import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // product : Product ={
  //   name : 'Product',
  //   price: 24.45,
  //   desc : 'nội dung',
  }
  // changeStatus(){
  // }
  // changeName(){
  //   this.product.name = e.target.value;
  //   console.log(e.target.value);
  // }

