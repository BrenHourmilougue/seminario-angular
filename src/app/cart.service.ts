import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './article-list/article';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList: Product[]=[];
  cartList: BehaviorSubject<Product[]> =new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(producto:Product){
    let item: Product | undefined = this._cartList.find((v1)=> v1.productName == producto.productName);
    if (!item){
      this._cartList.push({... producto});
    } else {
      item.quantity += producto.quantity
    }
    
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }


}
