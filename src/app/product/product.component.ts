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
  filterMode = 'SHOW_ALL';

  constructor(private fb: FormBuilder) { }
  ngOnInit() {

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
  changeFilterMode(input: string) {
    this.filterMode = input;
  }
  get productFilterred(): Product[] {
    if (this.filterMode === 'WISHLIST') {
      return this.products.filter(product => product.wishlist === true);
    }
    if (this.filterMode === 'NONE_WISHLIST') {
      return this.products.filter(product => product.wishlist === false);
    }
    return this.products;
  }
}
