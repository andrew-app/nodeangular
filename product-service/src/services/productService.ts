import { ProductRepository } from "../repositories/productRepository";


export class ProductService {
    productRepo: ProductRepository;

    constructor() {
        this.productRepo = new ProductRepository();
    }

    public getProducts() {
        return this.productRepo.findAllProducts();
    }
}