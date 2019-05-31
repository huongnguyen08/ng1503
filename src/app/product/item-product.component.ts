import { Component } from '@angular/core';
@Component({
    selector: 'app-item-product',
    templateUrl: './item-product.component.html'
})
export class ItemProductComponent {


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
