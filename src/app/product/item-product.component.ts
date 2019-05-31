import { Component, Input } from '@angular/core';
import { Product } from '../products-list';
@Component({
    selector: 'app-item-product',
    templateUrl: './item-product.component.html',
    styleUrls: [ './product.component.css' ]
})
export class ItemProductComponent {
    @Input() productList: Product[];





  setWishlist(id: string) {
    // const product: Product = this.products.find(p => p.id === id);
    // product.wishlist = !product.wishlist;
  }
  removeProduct(id: string) {
    // const index: number = this.products.findIndex( p =>  p.id === id);
    // if ( index >= 0 ) {
    //   return this.products.splice(index, 1);
    // }
    // alert('Cannot find product!');
  }
}
