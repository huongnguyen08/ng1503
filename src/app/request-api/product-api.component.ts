import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../products-list';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-api',
    templateUrl: 'product-api.component.html'
})
export class ProductApiComponent {
    listProduct: Product[];
    formAddProduct: FormGroup;

    constructor(private productService: ProductService, private fb: FormBuilder) {
        this.formAddProduct = this.fb.group({
            name : ['', Validators.required],
            price : ['0', Validators.required]
        });

        this.productService.getListProduct()
        .then(result => this.listProduct = result)
        .catch(err => console.log({ err: err.message}));
    }
}
