import { get } from "http"
import { ProductService } from "../services/productService";

export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public getProducts() {
        return this.productService.getProducts();
    }
}