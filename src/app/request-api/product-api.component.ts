import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
    selector: 'app-product-api',
    template: `
    `
})
export class ProductApiComponent {
    // url = 'http://localhost:3000/';

    // constructor(private http: HttpClient) {
    //     this.http.get(this.url)
    //     .toPromise()
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err.message));
    // }

    constructor(private productService: ProductService) {
        // this.productService.getListProduct()
        // .then(result => console.log(result))
        // .catch(err => console.log({ err: err.message}));
        this.productService.addProduct('San pham B', 200000)
        .then(result => console.log(result))
        .catch(err => console.log({ err: err.message}));
    }
}
