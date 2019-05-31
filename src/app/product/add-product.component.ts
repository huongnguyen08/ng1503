import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./product.component.css']
})
export class AddProductComponent implements OnInit {
    @Input() showForm: boolean;
    @Output() changeForm = new EventEmitter();

    formAddProduct: FormGroup;

    constructor( private fb: FormBuilder) {}
    ngOnInit() {
        this.formAddProduct = this.fb.group({
            name: ['', Validators.required],
            price: ['0', Validators.required]
          });
    }
    toggleForm() {
        console.log(this.showForm);
        this.changeForm.emit(!this.showForm);
    }

    addProduct() {
        // const { name, price } = this.formAddProduct.value;
        // const id = Date.now().toString();
        // this.products.unshift({id, name, price, wishlist: false});
        // this.formAddProduct.setValue({ name: '', price: 0});
        // this.toggleForm();
      }

}
