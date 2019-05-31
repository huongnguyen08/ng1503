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
    const product: Product = this.productList.find(p => p.id === id);
    product.wishlist = !product.wishlist;
  }
  removeProduct(id: string) {
    const index: number = this.productList.findIndex( p =>  p.id === id);
    if ( index >= 0 ) {
      return this.productList.splice(index, 1);
    }
    alert('Cannot find product!');
  }
}
