import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-product-api',
    template: `
    `
})
export class ProductApiComponent {
    url = 'http://localhost:3000/';

    constructor(private http: HttpClient) {
        this.http.get(this.url)
        .toPromise()
        .then(result => console.log(result))
        .catch(err => console.log(err.message));
    }
}
