import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../products-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = listProduct;

  constructor() { }
  ngOnInit() {
  }

}
