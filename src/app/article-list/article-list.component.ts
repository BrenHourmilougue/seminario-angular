import { Component, OnInit } from '@angular/core';
import {Product} from './article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  products : Product []=[
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 1200,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 10,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 1000,
      stock :0,
      description : 'Descripcion',
      quantity:0,
      discount : 5,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 400,
      stock :3,
      description : 'Descripcion',
      quantity:0,
      discount :0,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 3600,
      stock :0,
      description : 'Descripcion',
      quantity:0,
      discount : 30,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 1500,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 0,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 2000,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 10,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 20000,
      stock :4,
      description : 'Descripcion',
      quantity:0,
      discount : 0,
    },
    {
      productName : 'Nombre del producto',
      brand : 'Marca',
      price : 8560,
      stock :10,
      description : 'Descripcion',
      quantity:0,
      discount : 0,
    },
  ]

  downQuantity(product:Product):void{
    if (product.quantity>0){
      product.quantity--;
    }
  }
  upQuantity(product:Product):void{
    if (product.quantity<product.stock){
      product.quantity++;
    }
  }
  changeQuantity(event:any,product:Product):void{
    console.log(event.key);
  }

  constructor() { }

  ngOnInit(): void {}


}

