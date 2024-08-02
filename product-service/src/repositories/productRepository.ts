import { Product } from "../models/product";

const mockProductRepository: Product[] = [
    Product({ id: 1, name: 'Product 1', price: 5, quantity: 3 }),
    Product({ id: 2, name: 'Product 2', price: 8, quantity: 5 }),
    Product({ id: 3, name: 'Product 3', price: 12, quantity: 1 }),
];

export class ProductRepository {
    public findAllProducts(): Product[] {
        return mockProductRepository;
    }
}