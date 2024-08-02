import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/product');
  }
}