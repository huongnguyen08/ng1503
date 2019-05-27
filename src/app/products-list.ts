export interface Product {
    name: string;
    price: number;
    wishlist?: boolean;
}
export let listProduct: Product[] = [
    { name: 'Iphone X', price: 20000000, wishlist: true },
    { name: 'Macbook pro', price: 50000000, wishlist: false },
    { name: 'Apple Watch', price: 25000000, wishlist: false },
];

