import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products-list';

@Injectable()

export class ProductService {
    private url = 'http://localhost:3000/';

    constructor(private http: HttpClient) {
    }
    async getListProduct(): Promise<Array<Product>> {
        return this.http.get(`${this.url}product`)
        .toPromise()
        .then((result: Result) => {
            if (result.success) {
                return Promise.resolve(result.products);
            } else {
                throw new Error('Cannot get product!');
            }
        })
        .catch(err => Promise.reject(err));
    }
}

interface Result {
    success: boolean;
    message?: string;
    product?: Product;
    products?: Array<Product>;
}
