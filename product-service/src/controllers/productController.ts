import { get } from "http"
import { ProductService } from "../services/productService";

export class ProductController {
    productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public products() {
        return this.productService.getProducts();
    }
}