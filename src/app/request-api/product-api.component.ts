import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../products-list';

@Component({
    selector: 'app-product-api',
    template: `
        <div *ngFor="let product of listProduct ">
            <p><b>Name: {{product.name}}</b></p>
            <p>Price: {{product.price | number}}</p>
            <hr>
        </div>
    `
})
export class ProductApiComponent {
    listProduct: Product[];

    // constructor(private http: HttpClient) {
    //     this.http.get(this.url)
    //     .toPromise()
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err.message));
    // }

    constructor(private productService: ProductService) {
        this.productService.getListProduct()
        .then(result => this.listProduct = result)
        .catch(err => console.log({ err: err.message}));
    }
}
