import { AsyncPipe } from '@angular/common';
import { Product, ProductService } from './ProductService';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    standalone: true,
    imports: [AsyncPipe],
    selector: 'product-list',
    styleUrl: './product.component.scss',
    template: `
        @if (products$ | async; as products) {
            @for(product of products; track product.name) {
            <div [class.parent]="products">
                <p>Name: {{ product.name }}</p>
                <p>Price: {{ product.price }}</p>
                <p>Quantity: {{ product.quantity }}</p>
            </div>
            }
        }
    `,
})
export class ProductComponent {
  products$!: Observable<Product[]>;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe();
  }
}