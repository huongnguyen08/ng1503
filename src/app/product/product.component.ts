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

  setWishlist(id: string) {
    const product: Product = this.products.find(p => p.id === id);
    product.wishlist = !product.wishlist;
  }
  removeProduct(id: string) {
    const index: number = this.products.findIndex( p =>  p.id === id);
    if ( index >= 0 ) {
      return this.products.splice(index, 1);
    }
    alert('Cannot find product!');
  }
}
