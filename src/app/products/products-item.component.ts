import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../products-list';

@Component({
    selector: 'app-products-item',
    templateUrl: './products-item.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsItemComponent {
    products: Array<Product>;

    constructor(private store: Store<Array<Product>>) {
        // get state default from productReducer
        // select('products') : products: StoreModule.forRoot
        this.store.select('products').subscribe(
            listProduct => this.products = listProduct
        );
    }
    removeProduct(id: number) {
        this.store.dispatch({
            type: 'REMOVE_PRODUCT',
            idProduct: id
        });
    }
    setWishList(id: number) {
        this.store.dispatch({
            type: 'TOGGLE_WISHLIST',
            idProduct: id
        });
    }
}

