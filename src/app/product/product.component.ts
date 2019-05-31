import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../products-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = listProduct;
  isShowForm = false;
  filterMode = 'SHOW_ALL';

  constructor() { }
  ngOnInit() {

  }

  receiveToggleForm(mode) {
    return this.isShowForm = mode;
  }

  get productFilterred(): Product[] {
    if (this.filterMode === 'WISHLIST') {
      return this.products.filter(product => product.wishlist === true);
    }
    if (this.filterMode === 'NONE_WISHLIST') {
      return this.products.filter(product => product.wishlist === false);
    }
    return this.products;
  }
}
