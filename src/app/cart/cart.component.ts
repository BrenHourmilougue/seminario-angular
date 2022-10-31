import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Product} from '../article-list/article';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList$: Observable<Product[]>;
  constructor(private cart: CartService) { 
    this.cartList$=cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
