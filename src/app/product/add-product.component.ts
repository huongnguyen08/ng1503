import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./product.component.css']
})
export class AddProductComponent implements OnInit {
    formAddProduct: FormGroup;
    constructor( private fb: FormBuilder) {}
    ngOnInit() {
        this.formAddProduct = this.fb.group({
            name: ['', Validators.required],
            price: ['0', Validators.required]
          });
    }

}
