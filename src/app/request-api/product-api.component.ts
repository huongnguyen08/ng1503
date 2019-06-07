import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-product-api',
    template: `
    `
})
export class ProductApiComponent {
    constructor(private http: HttpClient) {
    }
}