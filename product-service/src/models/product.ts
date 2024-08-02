export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export const Product = (product: Product) => product;