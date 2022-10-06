import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Product} from './article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  products : Product []=[
    {
      productName : 'Pinza',
      brand : 'Rottweiler',
      price : 1200,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 10,
    },
    {
      productName : 'Destornillador',
      brand : 'Bremen',
      price : 1000,
      stock :0,
      description : 'Descripcion',
      quantity:0,
      discount : 5,
    },
    {
      productName : 'Llave combinada',
      brand : 'Bremen',
      price : 400,
      stock :3,
      description : 'Descripcion',
      quantity:0,
      discount :0,
    },
    {
      productName : 'Llave inglesa',
      brand : 'Bahco',
      price : 3600,
      stock :0,
      description : 'Descripcion',
      quantity:0,
      discount : 30,
    },
    {
      productName : 'Destornillador',
      brand : 'Bremen',
      price : 1500,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 0,
    },
    {
      productName : 'Prensa carpintero',
      brand : 'Wembley',
      price : 2000,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 10,
    },
    {
      productName : 'Caladora 380W',
      brand : 'Skil',
      price : 20000,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 0,
    },
    {
      productName : 'Juego destornilladores',
      brand : 'Bremen',
      price : 8560,
      stock :10,
      description : 'Descripcion',
      quantity:0,
      discount : 0,
    },
  ]

  
  constructor(private cart: CartService) { }
  addToCart(producto : Product): void{
    if (producto.quantity>0){
      this.cart.addToCart(producto);
      producto.stock -= producto.quantity;
      producto.quantity = 0;
    }
    
  }

  ngOnInit(): void {}


}

