import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products-list';
import { throwError } from 'rxjs';

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
    async addProduct(name: string, price: number): Promise<Product> {
        return this.http.post(
            `${this.url}add-product`,
            { name, price }
        ).toPromise()
        .then((result: Result) => {
            if (result.success) {
                return result.product;
            } else {
                throw new Error(result.message);
            }
        })
        .catch(err => Promise.reject(err));
    }
    async removeProduct(id: string) {
        return this.http.delete(`${this.url}product/${id}`)
        .toPromise()
        .then((result: Result) => {
            if (result.success) {
                return result.product;
            } else {
                throw new Error(result.message);
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
