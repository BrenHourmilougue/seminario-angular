import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from '../services/article-data.service';
import { CartService } from '../services/cart.service';
import {Product} from './article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  products : Product[]=[];

  
  constructor(
    private cart: CartService,
    private articlesData : ArticleDataService) { }

    ngOnInit(): void {
      this.articlesData.getAll().subscribe(products => this.products = products);
    }

  addToCart(producto : Product): void{
    if (producto.quantity>0){
      this.cart.addToCart(producto);
      producto.stock -= producto.quantity;
      producto.quantity = 0;
    }
    
  }
}

