import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../products-list';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-product-api',
    templateUrl: 'product-api.component.html'
})
export class ProductApiComponent {
    listProduct: Product[];
    formAddProduct: FormGroup;

    constructor(private productService: ProductService, private fb: FormBuilder, private store: Store<any>) {
        this.formAddProduct = this.fb.group({
            name : ['', Validators.required],
            price : ['0', Validators.required]
        });

        this.productService.getListProduct()
        .then(result => {
            this.store.dispatch({
                type: 'INIT_PRODUCT_API',
                products: result
            });
        })
        .catch(err => console.log({ err: err.message}));

        this.store.select('productsAPI').subscribe(
            list => this.listProduct = list
        );
    }
    addProduct() {
        const { name, price } = this.formAddProduct.value;
        this.productService.addProduct(name, price)
        .then(result => {
            this.store.dispatch({
                type: 'ADD_PRODUCT_API',
                product: result
            });
            this.formAddProduct.setValue({name: '', price: '0'});
        })
        .catch(err => console.log({ err: err.message}));
    }
    deleteProduct(id: string) {
        
    }
}
