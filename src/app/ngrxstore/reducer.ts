import { Action } from '@ngrx/store';
import { Product, listProduct } from '../products-list';

export function counterReducer(state: number = 0, action: Action) {
    if (action.type === 'INCREASE') {
        return state + 1;
    }
    if (action.type === 'DECREASE') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return 0;
    }
    return state;
}

// state: pure
export function productReducer(state: Array<Product> = listProduct, action: any) {
    if (action.type === 'ADD_PRODUCT') {
        // add product into state
        return state;
    }
    if (action.type === 'REMOVE_PRODUCT') {
        return state.filter(product => product.id !== action.idProduct);
    }
    return state;
}
/**
 * 1. dinh nghia reducer
 * 2. khai bao reducer App Module
 * 3. goi state default su dung o 1 component bat ki
 * 4. thay doi trang thai cua state o 1 component bat ki
 */
