import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../products-list';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = listProduct;
  isShowForm = false;
  formAddProduct: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.formAddProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['0', Validators.required]
    });

    // this.formAddProduct = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   price: new FormControl('0', Validators.required)
    // });
  }

  setWishlist(id: string) {
    const product: Product = this.products.find(p => p.id === id);
    product.wishlist = !product.wishlist;
  }
  removeProduct(id: string) {
    const index: number = this.products.findIndex( p =>  p.id === id);
    if ( index >= 0 ) {
      return this.products.splice(index, 1);
    }
    alert('Cannot find product!');
  }
  toggleForm(): boolean {
    return this.isShowForm = !this.isShowForm;
  }
  addProduct() {
    const { name, price } = this.formAddProduct.value;
    const id = Date.now().toString();
    this.products.unshift({id, name, price, wishlist: false});
    this.formAddProduct.setValue({ name: '', price: 0});
    this.toggleForm();
  }
}
