import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id:Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString(),
      },
      {
        id:Date.now(),
        title: 'Pro 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toISOString(),
      },
      {
        id:Date.now(),
        title: 'Pro 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=25',
        createdAt: new Date().toISOString(),
      },
      {
        id:Date.now(),
        title: 'Pro 11',
        price: 1001,
        image: 'https://picsum.photos/640/640?r=1',
        createdAt: new Date().toISOString(),
      },
      {
        id:Date.now(),
        title: 'Pro 21',
        price: 2001,
        image: 'https://picsum.photos/640/640?r=2',
        createdAt: new Date().toISOString(),
      },
      {
        id:Date.now(),
        title: 'Pro 31',
        price: 3001,
        image: 'https://picsum.photos/640/640?r=3',
        createdAt: new Date().toISOString(),
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
  }
}
